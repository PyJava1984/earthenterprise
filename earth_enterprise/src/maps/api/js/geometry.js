google.maps.__gjsload__('geometry', function(_){var qw=function(a,b){return Math.abs(_.Ta(b-a,-180,180))},rw=function(a,b,c,d,e){if(!d){c=qw(a.lng(),c)/qw(a.lng(),b.lng());if(!e)return e=Math.sin(_.kc(a.lat())),e=Math.log((1+e)/(1-e))/2,b=Math.sin(_.kc(b.lat())),_.oc(2*Math.atan(Math.exp(e+c*(Math.log((1+b)/(1-b))/2-e)))-Math.PI/2);a=e.fromLatLngToPoint(a);b=e.fromLatLngToPoint(b);return e.fromPointToLatLng(new _.N(a.x+c*(b.x-a.x),a.y+c*(b.y-a.y))).lat()}e=_.kc(a.lat());a=_.kc(a.lng());d=_.kc(b.lat());b=_.kc(b.lng());c=_.kc(c);return _.Ta(_.oc(Math.atan2(Math.sin(e)*
Math.cos(d)*Math.sin(c-b)-Math.sin(d)*Math.cos(e)*Math.sin(c-a),Math.cos(e)*Math.cos(d)*Math.sin(a-b))),-90,90)},sw=_.ga(),tw={computeHeading:function(a,b){var c=_.yd(a),d=_.zd(a);a=_.yd(b);b=_.zd(b)-d;return _.Ta(_.oc(Math.atan2(Math.sin(b)*Math.cos(a),Math.cos(c)*Math.sin(a)-Math.sin(c)*Math.cos(a)*Math.cos(b))),-180,180)},computeOffset:function(a,b,c,d){b/=d||6378137;c=_.kc(c);var e=_.yd(a);a=_.zd(a);d=Math.cos(b);b=Math.sin(b);var f=Math.sin(e),e=Math.cos(e),g=d*f+b*e*Math.cos(c);return new _.P(_.oc(Math.asin(g)),
_.oc(a+Math.atan2(b*e*Math.sin(c),d-f*g)))},computeOffsetOrigin:function(a,b,c,d){c=_.kc(c);b/=d||6378137;d=Math.cos(b);var e=Math.sin(b)*Math.cos(c);b=Math.sin(b)*Math.sin(c);c=Math.sin(_.yd(a));var f=e*e*d*d+d*d*d*d-d*d*c*c;if(0>f)return null;var g=e*c+Math.sqrt(f),g=g/(d*d+e*e),h=(c-e*g)/d,g=Math.atan2(h,g);if(g<-Math.PI/2||g>Math.PI/2)g=e*c-Math.sqrt(f),g=Math.atan2(h,g/(d*d+e*e));if(g<-Math.PI/2||g>Math.PI/2)return null;a=_.zd(a)-Math.atan2(b,d*Math.cos(g)-e*Math.sin(g));return new _.P(_.oc(g),
_.oc(a))},interpolate:function(a,b,c){var d=_.yd(a),e=_.zd(a),f=_.yd(b),g=_.zd(b),h=Math.cos(d),l=Math.cos(f);b=tw.Te(a,b);var n=Math.sin(b);if(1E-6>n)return new _.P(a.lat(),a.lng());a=Math.sin((1-c)*b)/n;c=Math.sin(c*b)/n;b=a*h*Math.cos(e)+c*l*Math.cos(g);e=a*h*Math.sin(e)+c*l*Math.sin(g);return new _.P(_.oc(Math.atan2(a*Math.sin(d)+c*Math.sin(f),Math.sqrt(b*b+e*e))),_.oc(Math.atan2(e,b)))},Te:function(a,b){var c=_.yd(a);a=_.zd(a);var d=_.yd(b);b=_.zd(b);return 2*Math.asin(Math.sqrt(Math.pow(Math.sin((c-
d)/2),2)+Math.cos(c)*Math.cos(d)*Math.pow(Math.sin((a-b)/2),2)))},computeDistanceBetween:function(a,b,c){c=c||6378137;return tw.Te(a,b)*c},computeLength:function(a,b){b=b||6378137;var c=0;a instanceof _.Xd&&(a=a.getArray());for(var d=0,e=a.length-1;d<e;++d)c+=tw.computeDistanceBetween(a[d],a[d+1],b);return c},computeArea:function(a,b){return Math.abs(tw.computeSignedArea(a,b))},computeSignedArea:function(a,b){b=b||6378137;a instanceof _.Xd&&(a=a.getArray());for(var c=a[0],d=0,e=1,f=a.length-1;e<f;++e)d+=
tw.Lk(c,a[e],a[e+1]);return d*b*b},Lk:function(a,b,c){return tw.Mk(a,b,c)*tw.Tl(a,b,c)},Mk:function(a,b,c){var d=[a,b,c,a];a=[];for(c=b=0;3>c;++c)a[c]=tw.Te(d[c],d[c+1]),b+=a[c];b/=2;d=Math.tan(b/2);for(c=0;3>c;++c)d*=Math.tan((b-a[c])/2);return 4*Math.atan(Math.sqrt(Math.abs(d)))},Tl:function(a,b,c){a=[a,b,c];b=[];for(c=0;3>c;++c){var d=a[c],e=_.yd(d),d=_.zd(d),f=b[c]=[];f[0]=Math.cos(e)*Math.cos(d);f[1]=Math.cos(e)*Math.sin(d);f[2]=Math.sin(e)}return 0<b[0][0]*b[1][1]*b[2][2]+b[1][0]*b[2][1]*b[0][2]+
b[2][0]*b[0][1]*b[1][2]-b[0][0]*b[2][1]*b[1][2]-b[1][0]*b[0][1]*b[2][2]-b[2][0]*b[1][1]*b[0][2]?1:-1}};var uw={decodePath:function(a){for(var b=_.w(a),c=Array(Math.floor(a.length/2)),d=0,e=0,f=0,g=0;d<b;++g){var h=1,l=0,n;do n=a.charCodeAt(d++)-63-1,h+=n<<l,l+=5;while(31<=n);e+=h&1?~(h>>1):h>>1;h=1;l=0;do n=a.charCodeAt(d++)-63-1,h+=n<<l,l+=5;while(31<=n);f+=h&1?~(h>>1):h>>1;c[g]=new _.P(1E-5*e,1E-5*f,!0)}c.length=g;return c},encodePath:function(a){a instanceof _.Xd&&(a=a.getArray());return uw.mn(a,function(a){return[Math.round(1E5*a.lat()),Math.round(1E5*a.lng())]})},mn:function(a,b){for(var c=[],
d=[0,0],e,f=0,g=_.w(a);f<g;++f)e=b?b(a[f]):a[f],uw.Nh(e[0]-d[0],c),uw.Nh(e[1]-d[1],c),d=e;return c.join("")},Nh:function(a,b){return uw.nn(0>a?~(a<<1):a<<1,b)},nn:function(a,b){for(;32<=a;)b.push(String.fromCharCode((32|a&31)+63)),a>>=5;b.push(String.fromCharCode(a+63));return b}};var vw={containsLocation:function(a,b){for(var c=_.Ta(a.lng(),-180,180),d=!!b.get("geodesic"),e=b.get("latLngs"),f=b.get("map"),f=!d&&f?f.getProjection():null,g=!1,h=0,l=e.getLength();h<l;++h)for(var n=e.getAt(h),q=0,r=n.getLength();q<r;++q){var u=n.getAt(q),x=n.getAt((q+1)%r),B=_.Ta(u.lng(),-180,180),D=_.Ta(x.lng(),-180,180),C=Math.max(B,D),B=Math.min(B,D);(180<C-B?c>=C||c<B:c<C&&c>=B)&&rw(u,x,c,d,f)<a.lat()&&(g=!g)}return g||vw.isLocationOnEdge(a,b)},isLocationOnEdge:function(a,b,c){c=c||1E-9;var d=
_.Ta(a.lng(),-180,180),e=b instanceof _.ze,f=!!b.get("geodesic"),g=b.get("latLngs");b=b.get("map");b=!f&&b?b.getProjection():null;for(var h=0,l=g.getLength();h<l;++h)for(var n=g.getAt(h),q=n.getLength(),r=e?q:q-1,u=0;u<r;++u){var x=n.getAt(u),B=n.getAt((u+1)%q),D=_.Ta(x.lng(),-180,180),C=_.Ta(B.lng(),-180,180),E=Math.max(D,C),M=Math.min(D,C);if(D=1E-9>=Math.abs(_.Ta(D-C,-180,180))&&(Math.abs(_.Ta(D-d,-180,180))<=c||Math.abs(_.Ta(C-d,-180,180))<=c))var D=a.lat(),C=Math.min(x.lat(),B.lat())-c,I=Math.max(x.lat(),
B.lat())+c,D=D>=C&&D<=I;if(D)return!0;if(180<E-M?d+c>=E||d-c<=M:d+c>=M&&d-c<=E)if(x=rw(x,B,d,f,b),Math.abs(x-a.lat())<c)return!0}return!1}};_.xc.google.maps.geometry={encoding:uw,spherical:tw,poly:vw};_.k=sw.prototype;_.k.decodePath=uw.decodePath;_.k.encodePath=uw.encodePath;_.k.computeDistanceBetween=tw.computeDistanceBetween;_.k.interpolate=tw.interpolate;_.k.computeHeading=tw.computeHeading;_.k.computeOffset=tw.computeOffset;_.k.computeOffsetOrigin=tw.computeOffsetOrigin;_.rc("geometry",new sw);});