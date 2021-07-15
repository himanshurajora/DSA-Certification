interface IStack{
    list: number[]
    push: (item:number) => void
    pop: () => number
}

class Stack implements IStack{
    list = []
    push (item): void{
        this.list.push(item)
    }
    pop():number{
        return this.list.pop()
    }
}


// queue    
interface IQueue{
    list: number[]
    enqueue: (item:number) => void
    dequeue: () => number
}

class Queue implements IQueue{
    list = []
    enqueue (...items: number[]): void{
        this.list = [...this.list, ...items]
    }
    dequeue():number{
        return this.list.shift()
    }
}