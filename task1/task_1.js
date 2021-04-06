class Set {
    constructor(array) {
        this.array = array;
    }

    add(el) {
        if (!this.has(el)) {
            this.array.push(el)
        } 
    }

    delete(el) {
        for( var i = 0; i < this.array.length; i++){               
            if ( this.array[i] === el) { 
                this.array.splice(i, 1); 
                i--; 
            }
        }
    }

    size() {
        return this.array.length
    }

    has(el) {
        return this.array.includes(el)
    }
}


const s = new Set([1, 2, 3, 4, 5])
console.log(s);
s.add(1)

s.add(1)

s.add(1)

console.log("s should have 5 members and actually has:", s.size())
console.log("s should contain 5:", s.has(5))

s.add(6)

console.log('s should contain 6', s.has(6))
console.log('s should have 6 members and actually has: ', s.size())

s.delete(6)