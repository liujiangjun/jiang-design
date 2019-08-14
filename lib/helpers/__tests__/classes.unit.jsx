import classes from '../classes'

describe('classes', () => {
    it('接受一个 className', () => {
        const result = classes('a')
        expect(result).toEqual('a')
    })
    it('接受两个 className', () => {
        const result = classes('a', 'b')
        expect(result).toEqual('a b')
    })
    it ('参数带 undefined', () => {
        const result = classes('a', undefined)
        expect(result).toEqual('a')
    })
    it ('多个奇怪的参数', () => {
        const result = classes('a', undefined, '中文', false, null)
        expect(result).toEqual('a 中文')
    })
    it ('没有参数', () => {
        const result = classes()
        expect(result).toEqual('')
    })
})

