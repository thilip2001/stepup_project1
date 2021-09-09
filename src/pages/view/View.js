import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import './view.css';

export default function View() {
    return (
        <div className="post">
                <div className="videoBox">

                <ReactPlayer url='https://www.youtube.com/watch?v=Ke90Tje7VS0&list=PLTjRvDozrdlw5En5v2xrBr_EqieHf7hGs&index=2' 
className="player" controls />
                </div>
             <div className="postInfo">
                 <span className="postTitle"><Link className="link" to="/single">Learn React JS Tutorials for beginners</Link></span>
             </div>
             <p className="postContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui sit quam assumenda ducimus dolorem perferendis, sed non sint eius, tempora quas suscipit ipsum esse! Ea magni at perferendis, similique qui explicabo iusto? Deleniti maxime excepturi, optio delectus facere quaerat. Fugiat temporibus eligendi culpa hic, autem ipsum itaque eum ipsa et laborum esse tempore, quo, molestiae at dolorem porro magni. Similique reprehenderit asperiores recusandae iusto quibusdam quae voluptatem veniam repellendus et temporibus cumque quis doloremque, non nesciunt, soluta ex, illum fuga eligendi earum. Incidunt illo perspiciatis dolorem voluptatem in quis expedita ipsa, nulla dolores eos, reiciendis praesentium eum saepe molestiae animi, veritatis optio illum iusto dicta non possimus accusamus recusandae. Hic vitae doloremque, doloribus veritatis dolorum animi totam at similique, quae voluptas illum perferendis distinctio pariatur dolores ut nobis. Tempore fugit nulla quidem aspernatur sint odio omnis aperiam vel eum nam. Dicta aspernatur ipsa quidem placeat a sint asperiores dolores, nostrum eligendi quas accusamus ratione sunt consectetur at, reiciendis in veritatis quibusdam. Repellat cumque, praesentium quod distinctio voluptatibus deleniti rerum aliquam earum doloribus dolorum. Voluptas soluta tempora vel enim ex tempore sit excepturi reiciendis nesciunt perferendis, nam praesentium dicta voluptatum fugit voluptatem neque amet temporibus dolor atque totam qui! Reprehenderit!</p>
        </div>
    )
}
