import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as a,c as s,d as r,a as e,b as c,e as t,f as i}from"./app-71d7a57c.js";const u={},v=e("p",null,"Docker的安装和使用",-1),o=i(`<h2 id="在-ubuntu-上安装-docker" tabindex="-1"><a class="header-anchor" href="#在-ubuntu-上安装-docker" aria-hidden="true">#</a> 在 Ubuntu 上安装 Docker</h2><p>在 Ubuntu 上安装 Docker 非常直接。我们将会启用 Docker 软件源，导入 GPG key，并且安装软件包。</p><ul><li>首先，更新软件包索引，并且安装必要的依赖软件，来添加一个新的 HTTPS 软件源：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt update
sudo apt install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用下面的<code>curl</code>导入源仓库的 GPG key：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>将 Docker APT 软件源添加到你的系统：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo add-apt-repository &quot;deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>如果是在国内的服务器可以使用阿里的源<code>sudo add-apt-repository &quot;deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable&quot;</code></p></blockquote><blockquote><p>现在，Docker 软件源被启用了，你可以安装软件源中任何可用的 Docker 版本。</p></blockquote><ul><li>安装 Docker 最新版本，运行下面的命令。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>一旦安装完成，Docker 服务将会自动启动。你可以输入下面的命令，验证它：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl status docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出将会类似下面这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>● docker.service - Docker Application Container Engine
     Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
     Active: active (running) since Thu 2020-05-21 14:47:34 UTC; 42s ago
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="卸载-docker" tabindex="-1"><a class="header-anchor" href="#卸载-docker" aria-hidden="true">#</a> 卸载 Docker</h2><p>在卸载 Docker 之前，你最好 移除所有的容器，镜像，卷和网络。</p><ul><li>运行下面的命令停止所有正在运行的容器，并且移除所有的 docker 对象：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker container stop $(docker container ls -aq)
docker system prune -a --volumes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>现在你可以使用apt像卸载其他软件包一样来卸载 Docker：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt purge docker-ce
sudo apt autoremove
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-常用命令" tabindex="-1"><a class="header-anchor" href="#docker-常用命令" aria-hidden="true">#</a> Docker 常用命令</h2><h3 id="_1、docker基础命令" tabindex="-1"><a class="header-anchor" href="#_1、docker基础命令" aria-hidden="true">#</a> 1、docker基础命令</h3><ul><li>启动docker</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>关闭docker</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl stop docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>重启docker</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>docker设置随服务启动而自启动</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl enable docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看docker 运行状态</li></ul><blockquote><p>------如果是在运行中 输入命令后 会看到绿色的active</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl status docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看docker 版本号信息</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker version

docker info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>docker 帮助命令</li></ul><blockquote><p>忘记了某些命令便可使用此进行查看与回顾</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker --help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>比如 咱忘记了 拉取命令 不知道可以带哪些参数 咱可以这样使用</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull --help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、docker镜像命令" tabindex="-1"><a class="header-anchor" href="#_2、docker镜像命令" aria-hidden="true">#</a> 2、docker镜像命令</h3><ul><li>查看自己服务器中docker 镜像列表</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>搜索镜像</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search 镜像名

docker search --filter=STARS=9000 mysql   //搜索 STARS &gt;9000的 mysql 镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>拉取镜像 不加tag(版本号) 即拉取docker仓库中 该镜像的最新版本latest ,加:tag 则是拉取指定版本</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull 镜像名 
docker pull 镜像名:tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行镜像</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run 镜像名
docker run 镜像名:Tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除镜像</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#删除一个
docker rmi -f 镜像名/镜像ID

#删除多个 其镜像ID或镜像用用空格隔开即可 
docker rmi -f 镜像名/镜像ID 镜像名/镜像ID 镜像名/镜像ID

#删除全部镜像  -a 意思为显示全部, -q 意思为只显示ID
docker rmi -f $(docker images -aq)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>强制删除镜像</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker image rm 镜像名称/镜像ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3、docker容器命令" tabindex="-1"><a class="header-anchor" href="#_3、docker容器命令" aria-hidden="true">#</a> 3、docker容器命令</h3><ul><li>查看正在运行容器列表</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看所有容器 -----包含正在运行 和已停止的</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>运行一个容器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it -d --name 要取的别名 镜像名:Tag
#-it 表示 与容器进行交互式启动
#-d 表示可后台运行容器 （守护式运行）
#--name 给要运行的容器 起的名字  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>例如我们要启动一个redis 把它的别名取为redis001 并交互式运行 需要的命令 —我这里指定版本号为5.0.5</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#1. 拉取redis 镜像
docker pull redis:5.0.5
#2.命令启动
docker run -it -d --name redis001 redis:5.0.5 /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>停止容器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker stop 容器名/容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>启动容器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker start 容器名/容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>重启容器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker restart 容器ID/容器名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除容器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#删除一个容器
docker rm -f 容器名/容器ID
#删除多个容器 空格隔开要删除的容器名或容器ID
docker rm -f 容器名/容器ID 容器名/容器ID 容器名/容器ID
#删除全部容器
docker rm -f $(docker ps -aq)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>进入容器的方式</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it 容器名/容器ID /bin/bash

#进入 前面的 redis001容器   
docker exec -it redis001 /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>从容器内 退出到自己服务器中</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#-----直接退出  未添加 -d(持久化运行容器) 时 执行此参数 容器会被关闭  
exit

# 优雅退出 --- 无论是否添加-d 参数 执行此命令容器都不会被关闭
Ctrl + p + q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一些容器的安装和配置" tabindex="-1"><a class="header-anchor" href="#一些容器的安装和配置" aria-hidden="true">#</a> 一些容器的安装和配置</h2><h3 id="docker安装tomcat" tabindex="-1"><a class="header-anchor" href="#docker安装tomcat" aria-hidden="true">#</a> docker安装tomcat</h3>`,78),m={href:"https://blog.csdn.net/carefree31441/article/details/120787232",target:"_blank",rel:"noopener noreferrer"},b=i(`<p>1、下载所需版本的tomcat镜像</p><ul><li>下载镜像</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#下载tomcat 8.5.79-jdk8版本
docker pull tomcat:8.5.79-jdk8
 
#不带版本号默认下载最新版本
docker pull tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看是否已下载tomcat 8.5.79-jdk8版本镜像文件</li></ul><p><code>docker images</code> 查看系统中的镜像文件是否包含刚下载的tomcat镜像</p><p>2、创建tomcat容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#创建容器
docker run -it -p 8081:8080 --name tomcat1 -d tomcat:8.5.79-jdk8

#进入tomcat容器
docker exec -it tomcat1 /bin/bash

#更改webapps目录
mv webapps webapps2
mv webapps.dist/ webapps

#退出容器
Ctrl + p + q

#重启tomcat容器
docker restart tomcat1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、挂载本地目录方式创建 tomcat 容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#在本地创建tomcat目录用于存储tomcat数据
mkdir /usr/local/docker/tomcat1
cd /usr/local/docker/tomcat1
mkdir webapps conf logs

#从未挂载数据卷的tomcat容器中拷贝webapps和conf配置文件
docker cp tomcat1:/usr/local/tomcat/webapps /usr/local/docker/tomcat1/
docker cp tomcat1:/usr/local/tomcat/conf /usr/local/docker/tomcat1/

#删除之前创建的tomcat1容器
docker rm -f tomcat1

#再次创建容器
docker run -it -p 8081:8080  \\
--name tomcat1 \\
--privileged=true \\
-v /usr/local/docker/tomcat1/webapps:/usr/local/tomcat/webapps \\
-v /usr/local/docker/tomcat1/conf:/usr/local/tomcat/conf \\
-v /usr/local/docker/tomcat1/logs:/usr/local/tomcat/logs \\
-v /etc/localtime:/etc/localtime \\
-e TZ=&quot;Asia/Shanghai&quot; \\
-d tomcat:8.5.79-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker安装nginx" tabindex="-1"><a class="header-anchor" href="#docker安装nginx" aria-hidden="true">#</a> docker安装nginx</h3><p>1、下载镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//下载最新版镜像
docker pull nginx

//下载指定版本的镜像
docker pull nginx:xxx 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、创建Nginx配置文件</p><blockquote><p>启动前需要先创建Nginx外部挂载的配置文件（ /home/nginx/conf/nginx.conf）<br> 之所以要先创建 , 是因为Nginx本身容器只存在/etc/nginx 目录 , 本身就不创建 nginx.conf 文件<br> 当服务器和容器都不存在 nginx.conf 文件时, 执行启动命令的时候 docker会将nginx.conf 作为目录创建 , 这并不是我们想要的结果 。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#创建挂载目录
mkdir -p /usr/local/docker/nginx/conf
mkdir -p /usr/local/docker/nginx/log
mkdir -p /usr/local/docker/nginx/html

#生成容器
docker run --name nginx -p 80:80 -d nginx

#复制相关内容到宿主机
docker cp nginx:/etc/nginx/nginx.conf /usr/local/docker/nginx/conf/nginx.conf
docker cp nginx:/etc/nginx/conf.d /usr/local/docker/nginx/conf/conf.d
docker cp nginx:/usr/share/nginx/html /usr/local/docker/nginx/
docker cp nginx:/var/log/nginx/ /usr/local/docker/nginx/log/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、创建Nginx容器并运行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#直接执行docker rm nginx或者以容器id方式关闭容器
#找到nginx对应的容器id
docker ps -a

#关闭该容器
docker stop nginx

#删除该容器
docker rm nginx

#删除正在运行的nginx容器
docker rm -f nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#Docker 创建Nginx容器
docker run \\
-p 80:80 \\
--name nginx \\
-v /usr/local/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \\
-v /usr/local/docker/nginx/conf/conf.d:/etc/nginx/conf.d \\
-v /usr/local/docker/nginx/log:/var/log/nginx \\
-v /usr/local/docker/nginx/html:/usr/share/nginx/html \\
-d nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、结果检测</p><blockquote><p>修改/usr/local/docker/nginx/html中的index.html文件,然后重启容器，刷新界面</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#修改index文件
cd /usr/local/docker/nginx/html
vim index.html  //修改i 保存退出esc :wq

#重启容器
docker restart nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker安装mysql" tabindex="-1"><a class="header-anchor" href="#docker安装mysql" aria-hidden="true">#</a> docker安装mysql</h3><p>1、下载镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull mysql:5.7.37
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、创建容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --privileged=true  \\
-v /usr/local/docker/mysql/data/:/var/lib/mysql \\
-v /usr/local/docker/mysql/logs/:/var/log/mysql \\
-v /usr/local/docker/mysql/conf/:/etc/mysql \\
-p 3306:3306 --name mysql \\
-e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7.37 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker安装php" tabindex="-1"><a class="header-anchor" href="#docker安装php" aria-hidden="true">#</a> docker安装php</h3><p>1、下载镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull php:7.4.33-fpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、创建容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -v /var/www/html:/var/www/html -p 9000:9000 --link mysql:mysql --name phpfpm php:7.4.33-fpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>参数说明</li></ul><p>-d 代表 daemon，即后台运行<br> -v 代表 volumes，即挂载宿主机和容器的目录映射<br> -p 是设置宿主机和容器的端口号<br> -link 代表链接外部 container，本例中即 mysql<br> -name 给当前 container 起一个名字</p><p>3、测试目录映射<br> 先进到容器内部：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it phpfpm /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这句话简单来说就是将容器中的 /bin/bash 连接到你当前的命令行，相当于进入容器中执行命令。</p><p>执行完后会进入容器的 /var/www/html 然后来创建个文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>touch test.php
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在宿主机中的 /var/www/html 目录下就会发现一个 test.php，说明映射目录成功啦~</p><p>4、PHP 扩展安装<br> 由于 typecho 需要使用 mysql pdo。再次用上面的命令进入 phpfpm 容器，然后执行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker-php-ext-install pdo_mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后执行<code>php -m</code>就可以看到已经安装的扩展</p>`,42);function p(x,g){const n=l("ExternalLinkIcon");return a(),s("div",null,[v,r(" more "),o,e("blockquote",null,[e("p",null,[e("a",m,[c("参考文档：Docker教程-3-Tomcat容器的安装配置使用"),t(n)])])]),b])}const f=d(u,[["render",p],["__file","linux-2.html.vue"]]);export{f as default};
