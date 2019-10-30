// Написать реализацию стека с методами getMin, push, top и получение элемента за константное время
function CustomStack() {
    const _store = [];
    let _minValue = null;

    return {
        findById(id) {
            return _store[id];
        },
        top() {
            return _store[_store.length - 1];
        },
        push(element) {
            if (_store.length === 0 || element < _minValue) {
                _minValue = element;
            }
            _store.push(element);
        },
        getMin() {
            return _minValue;
        },
        dump() {
            return _store;
        }
    }
}

const cs = new CustomStack();
cs.push(10);
cs.push(-10);
cs.push(0);
console.log(cs.getMin());
console.log(cs.dump());
