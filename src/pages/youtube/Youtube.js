import React ,{ useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './youtube.css'
import ReactPlayer from "react-player";

 export const Youtube = () => {
    const [youtubeVideo, setYoutubeVideo]=useState('');


    const [youtubeURL, setYoutubeURL] = useState('');
    const [youtubeError,setYoutubeError]=useState('');
    
    const handleYoutubeChange=(e)=>{
        setYoutubeVideo(e.target.value);
    }

    const handleYoutubeSubmit=(e)=>{
        e.preventDefault();
        const youtubeRegex=/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/
        if(youtubeRegex.test(youtubeVideo)){
            setYoutubeURL(youtubeVideo);
            setYoutubeError('');

        }
        else{
            setYoutubeError('Invalid youtube URL')
        }
        setYoutubeURL(youtubeVideo);
    }
    return (
        <div className="wrapper">
            <form className="form-group form"
            onSubmit ={handleYoutubeSubmit}>
                <input type="text" className="form-control"
                placeholder="Enter youtube url" required
                onChange={handleYoutubeChange}
                />
                <button type="submit" className="btn btn-success btn-md">
                    VIEW
                </button>
            </form>
            {youtubeError&&<div className='error-msg'>{youtubeError}</div>}
            <div className="youtubeBox">

            <ReactPlayer url={youtubeURL} 
            className="player" controls />
            </div>
        </div>
    );
}

export default Youtube;
