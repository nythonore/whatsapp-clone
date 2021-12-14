import { useEffect, useRef, useState } from 'react';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import AppLayout from '../layouts/AppLayout';
import { messages } from '../../assets/data/message';

const HomeView = () => {
  const messagesEndRef = useRef();

  const [data, setData] = useState(messages);
  const [message, setMessage] = useState('');

  useEffect(() => {
    messagesEndRef.current.scrollIntoView();
  }, []);

  const handleAddMessage = () => {
    setData([...data, { value: message, sent: true }]);
    setMessage('');

    messagesEndRef.current.scrollIntoView();
  }

  return (
    <AppLayout>
      <div className="message-box px-4 pt-4">
        {
          data.map((data, key) => (
            <div key={key}>
              {
                data.sent ? <div className="d-flex justify-content-end">
                  <div className="col-10 col-md-7 bg-ct-yellow message-card py-2 px-3">
                    {data.value}

                    <span className="float-right pl-4">
                      11:49 AM

                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-all message-check" viewBox="0 0 16 16">
                        <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                      </svg>
                    </span>
                  </div>
                </div> : <div className="d-flex justify-content-start">
                  <div className="col-10 col-md-7 bg-white message-card py-2 px-3">
                    {data.value}

                    <span className="float-right pl-4">
                      11:49 AM

                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-all message-check" viewBox="0 0 16 16">
                        <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                      </svg>
                    </span>
                  </div>
                </div>
              }
            </div>
          ))
        }

        <div ref={messagesEndRef} className="pt-4"></div>
      </div>

      <div className="d-block w-100 align-items-end">
        <div className="message-typer bg-ct-grey-2 px-4 py-3">
          <Form onSubmit={e => {
            e.preventDefault();
            if (message !== '') handleAddMessage();
          }}>
            <InputGroup>
              <InputGroup.Text className="px-1 cursor">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                </svg>
              </InputGroup.Text>

              <InputGroup.Text className="px-1 cursor">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                  <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                </svg>
              </InputGroup.Text>

              <FormControl placeholder="Type a message" className="mx-2" autoComplete="off" value={message} onChange={({ target }) => setMessage(target.value)} />

              {
                message ? <InputGroup.Text className="px-1 cursor" onClick={handleAddMessage}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                  </svg>
                </InputGroup.Text> : <InputGroup.Text className="px-1 cursor">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
                    <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                    <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                  </svg>
                </InputGroup.Text>
              }
            </InputGroup>
          </Form>
        </div>
      </div>
    </AppLayout>
  );
};

export default HomeView;
