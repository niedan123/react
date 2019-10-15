import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 类定义组件
class ShowTimes extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
        //this.handleClick = this.handleClick.bind(this);
        console.log('constructor',this.props.word);
    }
    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(()=>{
            console.log(1)
            this.setState({
                time: new Date().toLocaleString()
            })
        },1000)
    }
    shouldComponentUpdate(){
        return true;
    }
    // getSnapshotBeforeUpdate(){
    //     console.log('getsnapshot');
    // }
    componentDidUpdate(){
        console.log('didupdate');
        
    }
    handleClick = (num,e)=>{
        console.log(num,e);
        console.log('点击成功');
    }
    divClick(num,e){
        console.log(num,e);
    }
    render(){
        console.log('render');

        return (
            <Fragment>
                <div onClick = {(ev)=>this.handleClick(1,ev)}>
                {this.state.time}</div>
                <div onClick = {this.divClick.bind(this,333)}>hello{this.props.word}</div>
            </Fragment>
        );
    }
}


//默认导出
//export default ShowTimes;
//命名导出
export {ShowTimes};