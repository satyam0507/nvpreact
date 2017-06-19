import { h } from 'preact';
import UserCard from './UserCard';

var userData = [
    {
        "image": "https://www.w3schools.com/css/img_fjords.jpg",
        "text": "Irure aliqua eu anim in labore tempor. Sit eiusmod reprehenderit ipsum amet. Ea ad eu anim irure nisi dolor velit magna fugiat.",
        "title": "Voluptate reprehenderit sint amet labore officia."
    },
    {
        "image": "https://www.w3schools.com/css/img_fjords.jpg",
        "text": "Labore cillum amet dolor dolore officia enim exercitation aute. Id nostrud laboris esse amet sunt laboris ut Lorem sunt. Veniam consequat amet proident ea mollit. Tempor sunt aliquip proident sint sunt officia consectetur velit ea proident fugiat est reprehenderit non.",
        "title": "Est eu ipsum esse voluptate."
    },
    {
        "image": "https://www.w3schools.com/css/img_fjords.jpg",
        "text": "Et culpa culpa incididunt duis consequat qui dolore. Dolor eu quis sint eiusmod consectetur sit ullamco reprehenderit adipisicing laborum proident exercitation magna. Minim irure anim aute ea adipisicing officia adipisicing amet mollit commodo consectetur non id ea.",
        "title": "Cillum commodo proident aute in Lorem deserunt eu velit sint veniam elit."
    },
    {
        "image": "https://www.w3schools.com/css/img_fjords.jpg",
        "text": "Nulla ex id excepteur quis mollit. Lorem exercitation ullamco nostrud dolor do duis proident consequat magna amet elit laborum id. Occaecat velit aliquip tempor nostrud commodo adipisicing incididunt aliquip tempor dolore reprehenderit. Voluptate eu do nisi proident commodo fugiat enim velit veniam cupidatat adipisicing tempor. Exercitation adipisicing duis Lorem deserunt veniam consequat in laboris qui.",
        "title": "Elit enim adipisicing pariatur ad ea tempor duis et."
    },
        {
        "image": "https://www.w3schools.com/css/img_fjords.jpg",
        "text": "Irure aliqua eu anim in labore tempor. Sit eiusmod reprehenderit ipsum amet. Ea ad eu anim irure nisi dolor velit magna fugiat.",
        "title": "Voluptate reprehenderit sint amet labore officia."
    },
    {
        "image": "https://www.w3schools.com/css/img_fjords.jpg",
        "text": "Labore cillum amet dolor dolore officia enim exercitation aute. Id nostrud laboris esse amet sunt laboris ut Lorem sunt. Veniam consequat amet proident ea mollit. Tempor sunt aliquip proident sint sunt officia consectetur velit ea proident fugiat est reprehenderit non.",
        "title": "Est eu ipsum esse voluptate."
    },
    {
        "image": "https://www.w3schools.com/css/img_fjords.jpg",
        "text": "Et culpa culpa incididunt duis consequat qui dolore. Dolor eu quis sint eiusmod consectetur sit ullamco reprehenderit adipisicing laborum proident exercitation magna. Minim irure anim aute ea adipisicing officia adipisicing amet mollit commodo consectetur non id ea.",
        "title": "Cillum commodo proident aute in Lorem deserunt eu velit sint veniam elit."
    },
    {
        "image": "https://www.w3schools.com/css/img_fjords.jpg",
        "text": "Nulla ex id excepteur quis mollit. Lorem exercitation ullamco nostrud dolor do duis proident consequat magna amet elit laborum id. Occaecat velit aliquip tempor nostrud commodo adipisicing incididunt aliquip tempor dolore reprehenderit. Voluptate eu do nisi proident commodo fugiat enim velit veniam cupidatat adipisicing tempor. Exercitation adipisicing duis Lorem deserunt veniam consequat in laboris qui.",
        "title": "Elit enim adipisicing pariatur ad ea tempor duis et."
    }
]

export function App() {
    return (
        <div class="container-fluid">
            <div class="app">
                <div class="row">
                        {userData.map(user => <UserCard {...user} key={user.name} />)}
                </div>
            </div>
        </div>

    );
}

export default App;