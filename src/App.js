import React, {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import './styles/global.css';
import particlesOptions from "./particles.json";

function App() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <ThemeProvider>
        <div className="App">
            {init && <Particles options={particlesOptions}/>}
            {/* <Header /> */}
            <Body />
            <Footer />
        </div>
        </ThemeProvider>
    );
}

export default App;