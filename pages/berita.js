import {Component} from 'react'
import Layout from '../component/template'
export default class extends Component{
    render(){
        return(
            <div>
                <Layout>
                <div className="row">
                    <div className="col-sm alert-primary">
                    Ini adlah conten 1
                    </div>
                    <div className="col-sm alert-danger">
                    Content 2
                    </div>
                   </div>
                </Layout>
            </div>
        )
    }
}