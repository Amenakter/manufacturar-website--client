import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container mt-5 '>
            <div className='blog-container'>
                <div className='blog shadow-lg'>
                    <h3 className='text-red-500 text-2xl font-bold'> 1.What are the different ways to manage a state in a React application?.</h3>
                    <p><strong>There are four main types of state you need to properly manage in your React apps: </strong>
                        <ul className='font-bold text-success'>
                            <li>Global State</li>
                            <li>Local State</li>
                            <li>Server State</li>
                            <li>URL state</li>
                        </ul>
                    </p>

                </div>
            </div>
            <div className='blog-container'>
                <div className='blog shadow-lg'>
                    <h3 className='text-red-500 text-2xl font-bold'>2.Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p className='font-bold' >he Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by
                        which an object can inherit the properties and methods of another object.
                        Traditionally, in order to get and set the Prototype of an object, we use Object.
                        getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                </div>
            </div>
            <div className='blog-container'>
                <div className='blog shadow-lg'>
                    <h3 className='text-red-500 text-2xl font-bold'>3. What is a unit test? Why should write unit tests?</h3>
                    <p className='font-bold' >
                        Unit tests are typically automated tests written and run by software developers to ensure that a section of an application
                        (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module,
                        but it is more commonly an individual function or procedure
                    </p>
                </div>
            </div>
            <div className='blog-container'>
                <div className='blog shadow-lg'>
                    <h3 className='text-red-500 font-bold text-2xl'>4. What other services does firebase provide other than authentication?</h3>
                    <p className='font-bold' >
                        I will implement filter method for search to find products by name. for doing this implementation we have to follow belows method:
                    </p>
                    <p className='text-warning font-bold'>
                        const findProducts = array.filter(product => product.name == searchingName)
                    </p>
                </div>
            </div>
            <div className='blog-container'>
                <div className='blog shadow-lg'>
                    <h3 className='text-red-500 font-bold text-2xl'>5. What other services does firebase provide other than authentication?</h3>
                    <p className='font-bold' >
                        <li> Keeping component state local where necessary.</li>
                        <li> Memoizing React components to prevent unnecessary re-renders.</li>
                        <li>Code-splitting in React using dynamic import()</li>
                        <li> Windowing or list virtualization in React.</li>
                        <li>Lazy loading images in React.</li>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;