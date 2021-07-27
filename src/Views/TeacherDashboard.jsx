import React, { useState, useEffect } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import SideBar from '../Common/Sidebar';

import { PowerBIEmbed } from 'powerbi-client-react';
import {models} from 'powerbi-client'
const TeacherDashboard = () => {

    const history = useHistory();
    const {id} = useParams();

    useEffect(()=>{

    
    },[])
  
    return(
        <>
        <SideBar />
          <div className="pl-72 text-red-200">testing...</div> 
          <PowerBIEmbed
            embedConfig = {{
                type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                id: '17baadee-e27a-4ebf-b3cd-212f13b026d8',
                embedUrl: "https://app.powerbi.com/reportEmbed?reportId=17baadee-e27a-4ebf-b3cd-212f13b026d8&groupId=e748fbf7-dbf7-47c3-b539-aeb673548540&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMzNhOTM5OTAtOGJiNC00YjlkLWI0MjItNGY4ODUxMjE3ZDdlLyIsImlhdCI6MTYyNzM0NTE3MSwibmJmIjoxNjI3MzQ1MTcxLCJleHAiOjE2MjczNDkwNzEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFZcGNKK2xJK20zcGJFZ2lscVB2aWh3NHpNWEduK2FqWDd3dWZSbWx1RkdDZTg0am1nN3J4eGtvUUFqZmhvano4IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiWkVMQVlBIENIQUNPTiIsImdpdmVuX25hbWUiOiJFTElTQSBHQUJSSUVMQSIsImlwYWRkciI6IjEzOC45NC4xMjMuMTIxIiwibmFtZSI6IkVMSVNBIEdBQlJJRUxBIFpFTEFZQSBDSEFDT04iLCJvaWQiOiIyZWViNGM1ZC0yOWM0LTQ1OTAtYTMwNy0yNjE3NTFlYjYzZTIiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtNzc4MTEzMjk1LTIwMjA1ODMzODQtMTMyMDE3OTAtMjkwNjg5IiwicHVpZCI6IjEwMDNCRkZEOEJENjVGMTQiLCJyaCI6IjAuQVZrQWtEbXBNN1NMblV1MElrLUlVU0Y5Zmc4QkhJZGhYckZQZzZ5WVlRcC1rUkJaQUlJLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IldUa1ZhYlg1Z3l1cS1sU3BCLUNTSnVnaGRyVUpQdUp2dW41YlcxaHU3M2MiLCJ0aWQiOiIzM2E5Mzk5MC04YmI0LTRiOWQtYjQyMi00Zjg4NTEyMTdkN2UiLCJ1bmlxdWVfbmFtZSI6ImVnemVsYXlhQHVuYWguaG4iLCJ1cG4iOiJlZ3plbGF5YUB1bmFoLmhuIiwidXRpIjoiam5FMV9JVGJWay16NE45NzdrY01BQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.cxwOxR0mCCFN0Q3fJqxZ3fFLgdJlt5iOReqOX9bWXA44IJ1RxcAlQltnZaMu2kp9TAL8wdOZegR6hcAMSSYrq6wS3s5AkKRESZqk3WB0tx9ueVVH1-QpRU7mfOdmz8ysEurZmIDcJEUEMVtZZ10Z_CpLJjm8yskaXlPhQj0dl2z-xOzEPAhG5ef5AqwkCZcM9rJPbiBzH1WxMkhA3n7IgVXrq4tv5T_PxnIyZA_XIWELQrNBsS7nhtwPHZ0sfe2ajTiErP8QBwI3smf25cKJk_eNKQsF4cbnIbziw1MMe_3avFELcGVcNnOAsN4rv-Phydt9M3ALeRrYkFNW_z-ojg',
                tokenType: models.TokenType.Aad,
                settings: {
                    panes: {
                        filters: {
                            expanded: false,
                            visible: false
                        }
                    },
                    background: models.BackgroundType.Transparent,
                }
            }}

            eventHandlers = { 
                new Map([
                    ['loaded', function () {console.log('Report loaded');}],
                    ['rendered', function () {console.log('Report rendered');}],
                    ['error', function (event) {console.log(event.detail);}]
                ])
            }
                
            cssClassName = { "report-style-class" }

            getEmbeddedComponent = { (embeddedReport) => {
                window.report = embeddedReport;
            }}
        />

                </> 
    );
}

export default TeacherDashboard;