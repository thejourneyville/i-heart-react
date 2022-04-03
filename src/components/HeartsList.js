import CandyColoredHeart from './CandyColoredHeart';

const messages = [
    'cool cud',
    'me my <3',
    'you are bear',
    'team bear',
    'time hug',
    'fang',
    'bog love',
    'me have love',
    'all hover',
    'sweat poo',
    'u hack',
    'stank love',
    'heart me',
    'wink bear',
    'bear bear',
    'be my bear',
    'yank o way',
    'mage love',
    'oy',
    'in a fan'
];

const HeartsList = () => {

    // creates randomized message order
    let indexes = [];
    while(indexes.length < messages.length){
        let idx = Math.floor(Math.random() * messages.length);
        if(indexes.indexOf(idx) === -1) indexes.push(idx);
    }
    return (
        <div className='hearts-container'>
            {indexes.map((idx) => <CandyColoredHeart msg={messages[idx]} />)}
        </div>
    )
}

export default HeartsList;