
import Youtube from '../youtube/Youtube';
import './create.css';

export default function Create() {
    return (
        <div className="create">
            
            <form className="createForm">
                <div className="createFormGroup">
                
                    <input type='text' placeholder="Title" className="createInput" autoFocus={true}/>
                </div>
                <div className="createFormGroup">
                    <textarea placeholder="Brief Description...." type="text" className="createInput createText"></textarea>
                </div>
                    <div className="createSubmit">
                <a class="btn btn-primary" href="/single" role="button">Publish</a>
                </div>
            </form>
                <Youtube/>
            
        </div>
    )
}
