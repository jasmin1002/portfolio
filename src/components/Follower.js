import React, {forwardRef} from 'react'

function handleMove(event) {
    console.log(`{X: ${event.innerWidth}, Y: ${event.scrollHeight}`);
}

export const Follower = forwardRef((props, ref) => (
    <section ref={ref} onMouseMove={handleMove} className='chart-follower'>
        <h6>Followers' chart</h6>
    </section>
))