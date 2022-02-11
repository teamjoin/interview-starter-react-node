import styled from 'styled-components';
import joinLogo from './images/join.png';

import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={joinLogo} className="App-logo" alt="logo-join" />
                <Paragraph>
                    <BlueSpan className="Interview">Interview</BlueSpan> Starter
                </Paragraph>
            </header>
        </div>
    );
}

const BlueSpan = styled.span`
    color: var(--join-blue);
`;

const Paragraph = styled.p`
    font-family: Sharp Sans No1 Semibold, sans-serif;
`;

export default App;
