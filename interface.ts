interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}
const rec3: Rect = {
    id: '333',
    size: {
        width: 20,
        height: 30
    }
}
rec3.color = 'red'

//-------------------------------------------------------------

interface ReactArea extends Rect {
    getArea: () => number
}

const rect: ReactArea = {
    id: '333',
    size: {
        width: 20,
        height: 30
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

//---------------------------------------------------------------
interface IClock {
    time: Date,

    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date) {
        this.time = date
    }
}

//------------------------------------------------------------------------
interface Style {
    [key:string]:string
}

const css :Style = {
    border:'1px solid black',
    marginTop:'3px'
}