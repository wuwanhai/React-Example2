import React,{Component} from 'react'

class PostForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title:'hello',
            body:'wanhai'
        }
    }

    onSubmit = e => {
        e.preventDefault();
        const post = {
            title:this.state.title,
            body:this.state.body
        };

        // 提交表单数据
        fetch('http://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(post)
        })
            .then(res=>res.json())
            .then(data=>console.log(data))
    };

    // 使得表单内容可编辑
    onChange = e => {
        console.log(e.target);
        // 打印的是表单 dom
        const {name,value} = e.target;
        this.setState({
            [name]:value
        })
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input name='title' type="text" onChange={this.onChange} value={this.state.title}  />
                <textarea name="body"  onChange={this.onChange} value={this.state.body}>

                </textarea>
                <button type='submit'>提交</button>
            </form>
        )
    }
}

export default PostForm;