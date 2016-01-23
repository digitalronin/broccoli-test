import { expect } from 'chai'
import MyClass from '../../../src/classes/my_class'

describe('MyClass', () => {
  it('does something', () => {
    var myclass = new MyClass()
    expect(myclass.something()).to.equal('whatever')
  })
})
