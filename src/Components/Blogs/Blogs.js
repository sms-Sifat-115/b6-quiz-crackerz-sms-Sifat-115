import React from 'react';

const Blogs = () => {
    return (
        <div className='my-5'>
            <h1 className='text-danger text-center mb-5'><b>Blogs</b></h1>
            <div className ="container accordion accordion-flush border border-secondary rounded my-5" id="accordionFlushExample">
                <div className ="accordion-item">
                    <h2 className ="accordion-header" id="flush-headingOne">
                    <button className ="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        What is the purpose of React router?
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className ="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className ="accordion-body text-start"><b><u>Ans:</u></b> Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</div>
                    </div>
                </div>
                <div className ="accordion-item">
                    <h2 className ="accordion-header" id="flush-headingTwo">
                    <button className ="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        How does context API works?
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className ="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className ="accordion-body text-start"><b><u>Ans:</u></b> Context API is a component-based front-end framework that passes data from one component to another. It appears like passing data from parent to child components. Certain props like UI themes, language settings, local preferences, and others need different components with the application.</div>
                    </div>
                </div>
                <div className ="accordion-item">
                    <h2 className ="accordion-header" id="flush-headingThree">
                    <button className ="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        What is useRef hook?
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className ="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className ="accordion-body text-start"><b><u>Ans:</u></b> useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined. The code below illustrates how to invoke the useRef hook in functional components.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;