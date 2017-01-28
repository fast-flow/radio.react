import { Component } from "react"
import Radio from "../index"
import { shallow, mount, render } from "enzyme"

it('className', function () {
    const app = mount(<Radio className="myclass" />)
    expect(app.find('.myclass').length).toEqual(1)
})
