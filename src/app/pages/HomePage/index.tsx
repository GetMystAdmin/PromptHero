import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { Masthead } from './Masthead';
import { Features } from './Features';
import { PageWrapper } from 'app/components/PageWrapper';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>PromptHero</title>
        <meta
          name="description"
          content="An Evolutionary Algorithm Story"
        />
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
                }}>
                  Placeholder
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
