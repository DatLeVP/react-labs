import './clock.css'

function Clock () {
    const data = new Date()

    return(
    <div>
        <div class="header">
            Hello I am Clock
        </div>
        <div>
            Now is {data.toLocaleTimeString()}
        </div>
    </div>
    )
}

export default Clock