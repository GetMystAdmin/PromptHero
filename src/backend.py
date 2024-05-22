import boto3
import json
import base64
from io import BytesIO
from random import randint


#get the stringified request body for the InvokeModel API call
def get_titan_image_generation_request_body(prompt, negative_prompt=None):
    
    body = { #create the JSON payload to pass to the InvokeModel API
        "taskType": "TEXT_IMAGE",
        "textToImageParams": {
            "text": prompt,
        },
        "imageGenerationConfig": {
            "numberOfImages": 1,  # Number of images to generate
            "quality": "premium",
            "height": 512,
            "width": 512,
            "cfgScale": 8.0,
            "seed": randint(0, 100000),  # Use a random seed
        },
    }
    
    if negative_prompt:
        body['textToImageParams']['negativeText'] = negative_prompt
    
    return json.dumps(body)


def get_titan_response_image(response):
    # Correct way to read the StreamingBody object
    response_body = json.loads(response['body'].read().decode('utf-8'))
    
    images = response_body.get('images')
    print(response_body)
    image_data = base64.b64decode(images[0])
    
    return BytesIO(image_data)


#generate an image using Amazon Titan Image Generator
def get_image_from_model(prompt_content, negative_prompt=None):
    session = boto3.Session()

    bedrock = session.client(service_name='bedrock') #creates a Bedrock client
    
    body = get_titan_image_generation_request_body(prompt_content, negative_prompt=negative_prompt)
    print(body)
    
    response = bedrock.invoke_model(body=body, modelId="amazon.titan-image-generator-v1", contentType="application/json", accept="application/json")
    print(response)
    output = get_titan_response_image(response)
    
    return output



def lambda_handler(event, context):
    

    resp = get_image_from_model("Sarah Gadon in Egypt", "Ugly, Distorted")
    print(resp)
    img = get_titan_response_image(resp)

    #retval = response_body["completion"]

        
    return {
        'statusCode': 200,
        'body': json.dumps('{}')
    }