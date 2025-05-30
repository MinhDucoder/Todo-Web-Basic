import Navigo from 'navigo';

const Router = new Navigo('/', {
    linksSelector: 'a',
});

export const Render = (position, content) => {
    position.innerHTML = content;
};

export default Router;
