import React, { Component } from 'react';

export default class County extends React.Component{
    render(){
        document.getElementById('info').innerHTML="";
        skip_num = 0;
        placename = this.props.match.url;
        cur = pre_url+placename+"?$top=30&$format=JSON";
        fetchData(pre_url+this.props.match.url+"?$top=30&$format=JSON");
        return null;
    }
}