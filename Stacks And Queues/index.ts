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



interface IQueue<T> {
    list: T[];
    enque(value: T): void;
    deque(): T | string;
}

// priority queue class
class Queue<T> implements IQueue<T> {
    list: T[];
    constructor() {
        this.list = [];
    }
    enque(value: T): void {
        this.list.push(value);
    }
    deque(): T | string{
        if (this.list.length === 0) {
            return "the queue is empty";
        }
        let result = this.list[0];
        this.list.splice(0, 1);
        return result;
    }
}
