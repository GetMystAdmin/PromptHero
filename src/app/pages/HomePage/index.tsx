import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import axios from 'axios';

export function HomePage() {
  const [plot, setPlot] = React.useState('');
  const [imageData, setimageData] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false); // State to control spinner
  const [userFeedback, setUserFeedback] = React.useState(null); // New state for storing user feedback

  // Create handleClick function
  const handleClick = () => {
    setIsLoading(true); // Start loading
    axios.post('https://kpf175zgfb.execute-api.us-east-1.amazonaws.com/prod/get-image', { plot })
      .then(function (response) {
        setimageData(response.data.imageData);
        setIsLoading(false); // Stop loading after the data is received
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false); // Stop loading on error
      });
  };

  const handleFeedback = async (feedback) => {
    setUserFeedback(feedback); // Update state based on user feedback
    console.log(`User feedback is ${feedback}`);

    try {
      const response = await axios.post(
        'https://kpf175zgfb.execute-api.us-east-1.amazonaws.com/prod/submit-feedback', 
        { imageId: 'someImageId', feedback: feedback }
      );

      // Check if the feedback was successfully sent to the server
      if (response.status === 200) {
        alert("Feedback was submitted successfully!");
      }
    } catch (error) {
      // Handle error on failed POST request
      console.error(`Error: ${error}`);
      alert("An error occurred while submitting feedback. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>PromptHero</title>
        <meta name="description" content="An Evolutionary Algorithm Story" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}>
          <div style={{
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '50%',
              borderRight: '1px solid #000',
              paddingRight: '20px',
              height: '100%',
          }}>
            <input 
              type="text" 
              placeholder="Enter text here"
              value={plot} // Controlled component
              onChange={(e) => setPlot(e.target.value)} // Update state on change
              style={{
                padding: '10px',
                fontSize: '1.5em',
                textAlign: 'center',
                width: '70%',
                marginBottom: '20px',
              }}
            />
            <button 
              type="submit"
              onClick={handleClick}
              style={{
                padding: '10px 20px',
                fontSize: '1em',
                textAlign: 'center',
              }}
            >
              Submit
            </button>
          </div>
          <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '50%',
              paddingLeft: '20px',
              height: '100%',
          }}>
            <div 
              style={{
                border: '1px dashed #ccc',
                width: '70%', 
                height: '60vh', 
              }}
            >
              {isLoading ? 
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '100%'
                }}>
                  <div 
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      background: 'rgba(0, 0, 0, 0.5)',
                      display: 'flex',
                      justifyContent: 'center', 
                      alignItems: 'center'
                    }}
                  >
                    Loading...
                  </div>
                </div> 
                : 
              (imageData === '' ? 'Placeholder' : <img src={imageData} alt="Generated Plot" style={{ maxWidth: '100%'}} />)}
            </div>
            <div 
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '10px',
                    width: '70%',
                }}>
                   <button 
                    type="button"
                    onClick={() => handleFeedback('up')}
                    style={{
                      padding: '10px 20px',
                      fontSize: '1em',
                      textAlign: 'center',
                    }}
                  >
                    Thumbs Up
                  </button>
                  <button 
                    type="button"
                    onClick={() => handleFeedback('down')}
                    style={{
                      padding: '10px 20px',
                      fontSize: '1em',
                      textAlign: 'center',
                    }}
                  >
                    Thumbs Down
                  </button>
                </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
