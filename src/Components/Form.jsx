'use client'

const Form = () => {

const handleSubmit=()=>{



}

    return (
        <div>
            <form className="ml-4 md:ml-0" onSubmit={handleSubmit}>
                                        <label htmlFor="name">Name</label> <br />
                                        <input style={{backgroundColor:'#1A1A1A'}} type="text" name="name" id="name" />
                                        <hr className='border border-white mb-4 ' />
                                        <label htmlFor="name">Subject</label> <br />
                                        <input style={{backgroundColor:'#1A1A1A'}} type="text" name="subject" id="subject" />
                                        <hr className='border border-white mb-4' />
                                        <label htmlFor="name">Message</label> <br />
                                        <input style={{backgroundColor:'#1A1A1A'}} type="text" name="message" id="message" />
                                        <hr className='border border-white' />
                                        <button type='submit' className='py-2 px-4 mt-4 rounded-full' style={{backgroundColor:'#FF9143'}}>SEND</button>
                                        </form>
        </div>
    );
};

export default Form;