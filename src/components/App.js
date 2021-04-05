import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const all_url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON';
const pre_url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism';
var placename = 'Taipei';
var skip_num = 0;
var cur = all_url;
var stopupdate = false;
require('location.png');
require('logo.png');

function fetchData(cur_url){
    $.ajax({
        url: cur_url,
        type: 'GET',
        async: true,
        success: function(response){
            $.each(response, function (index, element){
                var imgurl = element.Picture.PictureUrl1;
                if (imgurl==null){ imgurl = "../image/location.png"; }
                var descpt = element.Description;
                if (descpt==null){
                    descpt = element.DescriptionDetail;
                    if (descpt==null)
                        descpt = "";
                }
                $('.info').append(
                    $('<div class="placeblock">').append(   
                        '<div><img src='+imgurl+' class="clipped"/></div>',
                        '<div><p class="placename"><b>'+element.Name+'</b></p><p class="placetext">'+descpt+'</p></div>',
                    )
                );
            });
            $(function(){
                var len = 47;
                $(".placetext").each(function(i){
                    if($(this).text().length>len){
                        $(this).attr("title",$(this).text());
                        var text=$(this).text().substring(0,len-1)+"...";
                        $(this).text(text);
                    }
                });
            });

        },
        error: function(xhr){
            if (xhr.status!=404)
                alert("發生錯誤: "+xhr.status+" "+xhr.statusText);
            else{
                stopupdate = true;
            }
        }
    });
}

$(function (){ //滑到底部時，額外加入30個景點
    window.onscroll = ()=>{
        let cHeight = document.documentElement.clientHeight;
        let sHeight = document.documentElement.scrollHeight;
        let sTop = document.documentElement.scrollTop;
        if(sHeight == cHeight+ sTop) {
            skip_num += 30;
            if (!stopupdate){
                if (cur==all_url)
                    fetchData('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$skip='+skip_num+'&$format=JSON');
                else
                    fetchData('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/'+placename+'?$top=30&$skip='+skip_num+'&$format=JSON');
            }
        }
    }
})


export default class App extends React.Component{
    gotop(){
        jQuery("html, body").animate({
            scrollTop: 0
        },1000);
        $(window).scroll(function() {
            if ($(this).scrollTop() > 150) {
                $('#gotop').fadeIn("fast");
            } else {
                $('#gotop').stop().fadeOut("fast");
            }
        }); 
    }

    dropbtnclick(){
        $("#myDropdown").toggleClass("show");
    }

    stopstate(){
        stopupdate = false;
    }

    render(){
        fetchData(cur);
        return ([
            <Router><nav id="nav" class="navbar navbar-expand-sm fixed-top">
                <ul id="navul" class="navbar-nav">
                    <li class="nav-item">
                        <img id="nav_logo" src="../image/logo.png"/>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/scenicSpot" onClick={this.stopstate}><span>全部景點</span></Link>
                    </li>
                    <li class="nav-item">
                        <button class="dropbtn" onClick={this.dropbtnclick}><span>縣市景點</span></button>
                        <div id="myDropdown" class="dropdown-content">
                            <div>
                                <Link class="nav-link" to={"/scenicSpot/Taipei"} onClick={this.stopstate}><span>臺北市</span></Link>
                                <Link class="nav-link" to={"/scenicSpot/NewTaipei"} onClick={this.stopstate}><span>新北市</span></Link>
                                <Link class="nav-link" to={"/scenicSpot/Taoyuan"} onClick={this.stopstate}><span>桃園市</span></Link>
                                <Link class="nav-link" to={"/scenicSpot/Taichung"} onClick={this.stopstate}><span>臺中市</span></Link>
                                <Link class="nav-link" to={"/scenicSpot/Tainan"} onClick={this.stopstate}><span>臺南市</span></Link>
                                <Link class="nav-link" to={"/scenicSpot/Kaohsiung"} onClick={this.stopstate}><span>高雄市</span></Link>
                            </div>
                            <div>
                                <Link class="nav-link" to={"/scenicSpot/Keelung"} onClick={this.stopstate}><span>基隆市</span></Link>
                                <Link class="nav-link" to={"/scenicSpot/Hsinchu"} onClick={this.stopstate}><span>新竹市</span></Link>
                                <Link class="nav-link" to={"/scenicSpot/HsinchuCounty"} onClick={this.stopstate}><span>新竹縣</span></Link>
                                <Link class="nav-link" to={"/scenicSpot/MiaoliCounty"} onClick={this.stopstate}><span>苗栗縣</span></Link>
                                <Link class="nav-link" to={"/scenicSpot/ChanghuaCounty"} onClick={this.stopstate}><span>彰化縣</span></Link>
                                <Link class="nav-link" to={"/scenicSpot/NantouCounty"} onClick={this.stopstate}><span>南投縣</span></Link>
                            </div>
                            <div>
                                <Link class="nav-link" to={"/scenicSpot/YunlinCounty"} onClick={this.stopstate}><span>雲林縣</span></Link>
                                <Link class="nav-link" to={"/scenicSpot/ChiayiCounty"} onClick={this.stopstate}><span>嘉義縣</span></Link>
                                <Link class="nav-link" to={"/scenicSpot/Chiayi"} onClick={this.stopstate}><span>嘉義市</span></Link>
                                <Link class="nav-link" to={"/scenicSpot/PingtungCounty"} onClick={this.stopstate}><span>屏東縣</span></Link>
                                <Link class="nav-link" to={"/scenicSpot/YilanCounty"} onClick={this.stopstate}><span>宜蘭縣</span></Link>
                                <Link class="nav-link" to={"/scenicSpot/HualienCounty"} onClick={this.stopstate}><span>花蓮縣</span></Link>
                            </div>
                            <div>
                                <Link class="nav-link" to={"/scenicSpot/TaitungCounty"} onClick={this.stopstate}><span>臺東縣</span></Link>
                                <Link class="nav-link" to={"/scenicSpot/KinmenCounty"} onClick={this.stopstate}><span>金門縣</span></Link>
                                <Link class="nav-link" to={"/scenicSpot/PenghuCounty"} onClick={this.stopstate}><span>澎湖縣</span></Link>
                                <Link class="nav-link" to={"/scenicSpot/LienchiangCounty"} onClick={this.stopstate}><span>連江縣</span></Link>
                            </div>
                        </div>
                    </li>
                </ul>
                <Switch>
                    <Route path = {"/scenicSpot/Taipei"} component={County}></Route>
                    <Route path = {"/scenicSpot/NewTaipei"} component={County}></Route>
                    <Route path = {"/scenicSpot/Taoyuan"} component={County}></Route>
                    <Route path = {"/scenicSpot/Taichung"} component={County}></Route>
                    <Route path = {"/scenicSpot/Tainan"} component={County}></Route>
                    <Route path = {"/scenicSpot/Kaohsiung"} component={County}></Route>
                    <Route path = {"/scenicSpot/Keelung"} component={County}></Route>
                    <Route path = {"/scenicSpot/Hsinchu"} component={County}></Route>
                    <Route path = {"/scenicSpot/HsinchuCounty"} component={County}></Route>
                    <Route path = {"/scenicSpot/MiaoliCounty"} component={County}></Route>
                    <Route path = {"/scenicSpot/ChanghuaCounty"} component={County}></Route>
                    <Route path = {"/scenicSpot/NantouCounty"} component={County}></Route>
                    <Route path = {"/scenicSpot/YunlinCounty"} component={County}></Route>
                    <Route path = {"/scenicSpot/ChiayiCounty"} component={County}></Route>
                    <Route path = {"/scenicSpot/Chiayi"} component={County}></Route>
                    <Route path = {"/scenicSpot/PingtungCounty"} component={County}></Route>
                    <Route path = {"/scenicSpot/YilanCounty"} component={County}></Route>
                    <Route path = {"/scenicSpot/HualienCounty"} component={County}></Route>
                    <Route path = {"/scenicSpot/TaitungCounty"} component={County}></Route>
                    <Route path = {"/scenicSpot/KinmenCounty"} component={County}></Route>
                    <Route path = {"/scenicSpot/PenghuCounty"} component={County}></Route>
                    <Route path = {"/scenicSpot/LienchiangCounty"} component={County}></Route>
                    <Route path = "/scenicSpot" component={All}></Route>
                </Switch>
            </nav></Router>,
            <div class="info" id="info"></div>,
            <button id="gotop" onClick={this.gotop}></button>]
        );
    }
}

class All extends React.Component{
    render(){
        document.getElementById('info').innerHTML="";
        skip_num = 0;
        cur = all_url;
        fetchData(pre_url+this.props.match.url+"?$top=30&$format=JSON");
        return null;
    }
}

class County extends React.Component{
    render(){
        document.getElementById('info').innerHTML="";
        skip_num = 0;
        placename = this.props.match.url;
        cur = pre_url+placename+"?$top=30&$format=JSON";
        fetchData(pre_url+this.props.match.url+"?$top=30&$format=JSON");
        return null;
    }
}