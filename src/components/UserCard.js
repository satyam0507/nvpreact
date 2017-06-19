import { h } from 'preact';

export function UserCard(props) {
    return (
        <div class="col-xs-12 col-md-3 ">
            <div class="card">
                <img class="card-img-top card-image" src={props.image} alt="Card image cap" />
                <div class="card-block">
                    <h4 class="card-title">{props.title}</h4>
                    <p class="card-text">{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default UserCard;