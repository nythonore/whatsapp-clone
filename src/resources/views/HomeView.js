import { useEffect, useRef, useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
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
                    <span className="float-right pl-4">11:49 AM</span>
                  </div>
                </div> : <div className="d-flex justify-content-start">
                  <div className="col-10 col-md-7 bg-white message-card py-2 px-3">
                    {data.value}
                    <span className="float-right pl-4">11:49 AM</span>
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
          <InputGroup>
            <InputGroup.Text className="px-2 cursor">
              <i className="fas fa-smile-beam"></i>
            </InputGroup.Text>

            <InputGroup.Text className="px-2 cursor">
              <i className="fas fa-paperclip"></i>
            </InputGroup.Text>

            <FormControl placeholder="Type a message" className="mx-3" autoComplete="off" value={message} onChange={({ target }) => setMessage(target.value)} />

            {
              message ? <InputGroup.Text className="px-2 cursor" onClick={handleAddMessage}>
                <i className="fas fa-paper-plane"></i>
              </InputGroup.Text> : <InputGroup.Text className="px-2 cursor">
                <i className="fas fa-microphone"></i>
              </InputGroup.Text>
            }
          </InputGroup>
        </div>
      </div>
    </AppLayout>
  );
};

export default HomeView;
