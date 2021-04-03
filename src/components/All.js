import React, { Component } from 'react';

export default class All extends React.Component{
    render(){
        document.getElementById('info').innerHTML="";
        skip_num = 0;
        cur = all_url;
        fetchData(pre_url+this.props.match.url+"?$top=30&$format=JSON");
        return null;
    }
}
