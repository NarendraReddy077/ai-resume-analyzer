import { useState, type FormEvent } from "react";
import Navbar from "~/components/Navbar";

const upload = () => {
    
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState("");
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

    }

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover" >
            <Navbar />
            <section className="main-section">
                <div className="page-heading">
                    <h1>Smart feedback for your resume</h1>
                    {isProcessing ? (
                        <>
                            <h2>{statusText}</h2>
                            <img src="/images/resume-scan.gif" className="w-full mt-[-110px]" />
                        </>
                    ) : (
                        <h2>Upload your resume to get ATS Score and AI-powered feedback.</h2>
                    )}
                    {!isProcessing && (
                        <form className="flex flex-col gap-4 mt-4 max-w-md mx-auto" 
                        id="upload-form" onSubmit={handleSubmit}>
                            <div className="form-div">
                                <label htmlFor="company-name">Company Name</label>
                                <input type="text" id="company-name" placeholder="Company Name" name="comapany-name" />
                            </div>
                            <div className="form-div">
                                <label htmlFor="job-title">Job Title</label>
                                <input type="text" id="job-title" placeholder="Job Title" name="job-title" />
                            </div>
                            <div className="form-div">
                                <label htmlFor="desc">Job Description</label>
                                <textarea rows={5} id="desc" placeholder="Job Description" name="Job Description" />
                            </div>
                            <div className="form-div">
                                <label htmlFor="uploader">Upload Resume</label>
                                <div>Uploader</div>
                            </div>
                            <button type="submit" className="primary-button mt-4">
                                Analyze Resume
                            </button>
                        </form>)}
                </div>        
            </section>
        </main>
    )
}
export default upload;
