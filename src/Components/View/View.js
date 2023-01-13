import React, {useEffect} from 'react';

const View = () => {
    useEffect(() => {
        // 组件挂载时，创建script标签
        const myScript = document.createElement('script');
        // 设置标签的src属性
        myScript.src = "myScript.js";
        // 明确设置为同步加载
        myScript.async = false;
        // 追加到body标签的最下面
        document.body.appendChild(myScript);
        return () => {
            // 组件即将卸载时，移除标签
            document.body.removeChild(myScript);
        };
    }, []);


    return (
        <div>
            {/*<div>*/}
            {/*    <script type='text/javascript'*/}
            {/*            id='clustrmaps'*/}
            {/*            src='//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=a&t=tt&d=0jrG4ANmAJYOwb9_vESb8sYr0bwBhK8fH2NA-jxpKAo&co=405360'/>*/}
            {/*</div>*/}
        </div>
    );
};

export default View;