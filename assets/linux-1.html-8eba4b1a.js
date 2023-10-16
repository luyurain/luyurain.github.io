import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as u,d as t,a as e,b as n,e as d,f as a}from"./app-71d7a57c.js";const c={},v=e("p",null,"摘要：本文主要是关于Ubuntu的更新、jdk的安装以及nginx的内容",-1),o={href:"https://www.yht7.com/news/192494",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.myfreax.com/how-to-setup-a-firewall-with-ufw-on-ubuntu-22-04/",target:"_blank",rel:"noopener noreferrer"},p=a(`<h2 id="更新-ubuntu-linux" tabindex="-1"><a class="header-anchor" href="#更新-ubuntu-linux" aria-hidden="true">#</a> 更新 Ubuntu Linux</h2><blockquote><p>新的系统刚安装好，需要先更新一下软件包</p></blockquote><h3 id="_1-命令-sudo-apt-update-sudo-apt-upgrade-y" tabindex="-1"><a class="header-anchor" href="#_1-命令-sudo-apt-update-sudo-apt-upgrade-y" aria-hidden="true">#</a> 1. 命令：<code>sudo apt update &amp;&amp; sudo apt upgrade -y</code></h3><ul><li>打开终端，输入命令：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt update &amp;&amp; sudo apt upgrade -y

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>它实际上不是单个命令，而是两个命令的组合。&amp;&amp; 是一种在 Linux中运行多个命令的方式，使得第二个命令仅在前一个命令成功执行时再执行。</p></li><li><p>当命令<code>apt upgrade</code>在安装更新之前要求确认时，最后的<code>-y</code>会自动输入<code>yes</code>。</p></li></ul><blockquote><p>注意，你也可以单独使用这两个命令，一一使用：</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt update
sudo apt upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-说明-sudo-apt-update" tabindex="-1"><a class="header-anchor" href="#_2-说明-sudo-apt-update" aria-hidden="true">#</a> 2. 说明：<code>sudo apt update</code></h3><ul><li><p>此命令更新可用包的本地数据库。如果不运行此命令，本地数据库将不会更新，你的系统将不知道是否有任何新版本的软件包可用。</p></li><li><p>这就是为什么当运行<code>sudo apt update</code>命令时，会在输出中看到很多URL。该命令从相应的存储库（即在输出中看到的URL）获取包信息。</p></li><li><p>在命令的末尾，它会告诉可以升级多少个包。可以通过运行以下命令来查看这些包</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt list --upgradable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-说明-sudo-apt-upgrade" tabindex="-1"><a class="header-anchor" href="#_3-说明-sudo-apt-upgrade" aria-hidden="true">#</a> 3. 说明：<code>sudo apt upgrade</code></h3><ul><li><p>此命令将已安装软件包的版本与本地数据库相对比，然后它会列出那些有更新版本可用的包。此时，它会询问是否要将已安装的软件包升级到较新的版本。</p></li><li><p>输入<code>yes</code>或<code>y</code>，或者直接按回车键确认安装更新。</p></li><li><p>所以区别是<code>sudo apt update</code>检查新软件包版本的可用性，而<code>sudo apt upgrade</code>实际上是安装新版本。</p></li></ul><h2 id="在-ubuntu-上安装-jdk" tabindex="-1"><a class="header-anchor" href="#在-ubuntu-上安装-jdk" aria-hidden="true">#</a> 在 Ubuntu 上安装 JDK</h2><h3 id="_1、安装" tabindex="-1"><a class="header-anchor" href="#_1、安装" aria-hidden="true">#</a> 1、安装</h3><ul><li><p>我这里下载的是jdk-8u181-linux-x64.tar.gz安装包，并将其直接放在了root目录下</p></li><li><p>在/usr/local/下创建java文件夹并进入</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /usr/local/
mkdir java
cd java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>将上面准备好的JDK安装包解压到/usr/local/java中即可</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -zxvf /root/jdk-8u181-linux-x64.tar.gz -C ./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>解压完之后，/usr/local/java目录中会出现一个jdk.1.8.0_181的目录</li></ul><h3 id="_2、配置环境变量" tabindex="-1"><a class="header-anchor" href="#_2、配置环境变量" aria-hidden="true">#</a> 2、配置环境变量</h3><ul><li>编辑/etc/profile文件，在文件尾部加入如下JDK环境配置即可</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JAVA_HOME=/usr/local/java/jdk1.8.0_181
CLASSPATH=$JAVA_HOME/lib/
PATH=$PATH:$JAVA_HOME/bin
export PATH JAVA_HOME CLASSPATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>然后执行如下命令让环境变量生效</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3、验证安装结果" tabindex="-1"><a class="header-anchor" href="#_3、验证安装结果" aria-hidden="true">#</a> 3、验证安装结果</h3><ul><li>输入如下命令即可检查安装结果：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java -version
javac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx的安装、配置和使用" tabindex="-1"><a class="header-anchor" href="#nginx的安装、配置和使用" aria-hidden="true">#</a> Nginx的安装、配置和使用</h2><h3 id="_1、安装-1" tabindex="-1"><a class="header-anchor" href="#_1、安装-1" aria-hidden="true">#</a> 1、安装</h3><p>1）安装依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt update

sudo apt-get install gcc
sudo apt-get install ruby
sudo apt-get install build-essential
sudo apt-get install libtool
sudo apt-get install libpcre3 libpcre3-dev
sudo apt-get install zlib1g-dev
sudo apt-get install openssl
sudo apt-get install libssl-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>或者通过一行命令</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install gcc ruby build-essential libtool libpcre3 libpcre3-dev zlib1g-dev libssl-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2）下载nginx</p>`,35),m={href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},g=a(`<p>3）安装步骤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#进入local文件夹
cd /usr/local

#创建文件夹,案列地址为 /usr/local/nginx
sudo mkdir nginx

#进入/nginx
cd /usr/local/nginx/

#下载安装包
wget http://nginx.org/download/nginx-1.22.1.tar.gz

#解压nginx-1.22.1.tar.gz
tar -xvf nginx-1.22.1.tar.gz

#解压后生成nginx-1.22.1文件夹，进入该文件夹
cd nginx-1.22.1

#设置参数，支持ssl
./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module

#编译
sudo make

#安装
sudo make install

#检测是否安装成功
cd /usr/local/nginx/sbin
./nginx -t 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、常用命令" tabindex="-1"><a class="header-anchor" href="#_2、常用命令" aria-hidden="true">#</a> 2、常用命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#进入到下面的目录，然后使用命令
cd /usr/local/nginx/sbin

#2.1 查看Nginx版本号
./nginx -v

#2.2 启动Nginx
./nginx

#2.3 关闭Nginx
./nginx -s stop

#2.4 重新加载Nginx
./nginx -s reload

#2.5 重启Nginx
./nginx -s reopen

#2.6 优雅停止Nginx
./nginx -s quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function x(h,_){const i=s("ExternalLinkIcon");return r(),u("div",null,[v,t(" more "),e("blockquote",null,[e("p",null,[e("a",o,[n("参考文档：VMware 虚拟机图文安装和配置 Ubuntu Server 22.04 LTS 教程"),d(i)])]),e("p",null,[e("a",b,[n("参考文档：如何在Ubuntu 22.04配置防火墙ufw"),d(i)])])]),p,e("p",null,[e("a",m,[n("下载地址"),d(i)])]),g])}const w=l(c,[["render",x],["__file","linux-1.html.vue"]]);export{w as default};
