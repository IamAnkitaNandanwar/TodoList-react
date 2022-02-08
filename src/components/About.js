import React from 'react'

const About = () => {

    return (
        <>
            <div className='container my-4'>
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">To-Do List</strong>
                        <h5 class="mb-0">Features</h5>
                        <p class="card-text mb-auto my-2">
                            This application is responsible for listing the items in the to-do state and providing options to delete and and add the to-do list. According to your needs, you can update the list and remove it whenever your task get completed.
                        </p>
                    </div>
                </div>
            </div>
            <div className='container my-4'>
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">To-Do List</strong>
                        <h5 class="mb-0">Benefits of Using a To Do List</h5>
                        <p class="card-text mb-auto my-2">
                            <ul>
                                <li className='my-2'><strong>Improves your memory:</strong> A to do list acts as an external memory aid. It’s only possible to hold a few pieces of information at one time. Keep a to do list and you’ll be able to keep track of everything, rather than just a few of the tasks you need to do. Your to do list will also reinforce the information, which makes it less likely you’re going to forget something.</li>
                                <li className='my-2'><strong>Increases productivity:</strong> A to do list allows you to prioritize the tasks that are more important. This means you don’t waste time on tasks that don’t require your immediate attention. Your list will help you stay focused on the tasks that are the most important.</li>
                                <li className='my-2'><strong>Helps with motivation:</strong> To do lists are a great motivational tool because you can use them to clarify your goals. You can divide your long-term goal into smaller, more achievable short-term goals and as you tick each one off your list, your confidence will increase.</li>
                            </ul>
                        </p>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png" class="bd-placeholder-img" width="400" height="400" alt="" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default About
