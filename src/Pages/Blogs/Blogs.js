import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className='blogs'>
            <h2>Questions:  Difference between authorization and authentication?</h2>
            <h3>Answer: </h3>
            <p>Authentication is the process of verify who is this, whereas authorization is the process of verify what specific app, files, and data a user has access to.
            Authentication works through passwords, one-time passwords, biometric information, and other information provided by the user.Authentication is the  best step of a good identity and access system process.
            On the other hand,authorization works through settings that are implemented and maintained by the organization.Authorization isn't visible to or changeable by the user.Authorization always takes place after authentication.
            </p>
            <h2>Questions: Why are you using firebase? What other options do you have to implement authentication?</h2>
            <h3>Answer: </h3>
            <p>Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase.Using firebase,create application without backend server.Fast display data in the application. Firebase provides hosting for lifetime.Its also includes encryption for data.Usually, authentication by a server entails the use of a user name and password. <br />
            There are some other options to implement authentication like that Cookie-Based authentication, Token-Based authentication, third party authentication such as OAuth, API-token and also openId SAML.
            </p>
            <h2>Questions:What other services does firebase provide other than       authentication?</h2>
            <h3>Answer: </h3>
            <p>Firebase provide Local Emulator Suite.The Firebase Local Emulator Suite is a set of advance tools for developers looking to build and test apps locally using Cloud firebase, realtime database, cloud,cloud functions, and firebase Hosting. It provides a rich user interface to help you get running and prototyping quickly.In addition, firebase provides realtime database.This type of database is cloud-hosted database.In realtime database data is stored as JSON and synchronized in realtime to every client.Moreover, it provides fireStore and it is flexible, scalable DB for mobile,web, and server development.Firebase provides hosting.It is production-grade web content hosting for developers.Firebase also used for cloud functions that is a serverless framework that lets you automatically run backend code in response to events.</p>
        </div>
        </div>
    );
};

export default Blogs;