import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(count => count + 1)
    }
    function handleClickdecrease() {
        console.log("current value", count);
        if (count === 0) return;

        setCount(count => count - 1)
    }
    function handleClickReset() {
        setCount(0)
    }
    return (

        <div className='panel'>
            <div className='panel-label'>ຈຸດກວດ 1 </div>
            
            <div className='counter-row'>
                <button className='btn' onClick={handleClickdecrease}>-</button>
                <span className='count'>{count}</span>
                <button className='btn' onClick={handleClick}>+</button>
                <button className='btn reset' onClick={handleClickReset}>reset</button>
            </div>
        </div>
    );

}
export default Counter