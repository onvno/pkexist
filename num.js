var abcStr = 'a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9';
var abcAry = abcStr.split(' ');
var multiAry = [];
abcAry.map(function(item,index){
  for(var i=0; i<abcAry.length; i++) {
    var newChild = item + abcAry[i];
    multiAry.push(newChild);
  }
})
var multiStr = multiAry.join(' ');
console.log(multiStr);

// 所有组合
/*
aa ab ac ad ae af ag ah ai aj ak al am an ao ap aq ar as at au av aw ax ay az a0 a1 a2 a3 a4 a5 a6 a7 a8 a9 ba bb bc bd be bf bg bh bi bj bk bl bm bn bo bp bq br bs bt bu bv bw bx by bz 

b0 b1 b2 b3 b4 b5 b6 b7 b8 b9 ca cb cc cd ce cf cg ch ci cj ck cl cm cn co cp cq cr cs ct cu cv cw cx cy cz c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 da db dc dd de df dg dh di dj dk dl dm dn do dp dq dr ds dt du dv dw dx dy dz d0 d1 d2 d3 d4 d5 d6 d7 d8 d9 ea eb ec ed ee ef eg eh ei ej ek el em en eo ep eq er es et eu ev ew ex ey ez e0 e1 e2 e3 e4 e5 e6 e7 e8 e9 fa fb fc fd fe ff fg fh fi fj fk fl fm fn fo fp fq fr fs ft fu fv 

fw fx fy fz f0 f1 f2 f3 f4 f5 f6 f7 f8 f9 ga gb gc gd ge gf gg gh gi gj gk gl gm gn go gp gq gr gs gt gu gv gw gx gy gz g0 g1 g2 g3 g4 g5 g6 g7 g8 g9 ha hb hc hd he hf hg hh hi hj hk hl hm hn ho hp hq hr hs ht hu hv hw hx hy hz h0 h1 h2 h3 h4 h5 h6 h7 h8 h9 ia ib ic id ie if ig ih ii ij ik il im in io ip iq ir is it iu iv iw ix iy iz i0 i1 i2 i3 i4 i5 i6 i7 i8 i9 ja jb jc jd je jf jg jh ji jj jk jl jm jn jo jp jq jr 

js jt ju jv jw jx jy jz j0 j1 j2 j3 j4 j5 j6 j7 j8 j9 ka kb kc kd ke kf kg kh ki kj kk kl km kn ko kp kq kr ks kt ku kv kw kx ky kz k0 k1 k2 k3 k4 k5 k6 k7 k8 k9 la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq lr ls lt lu lv lw lx 

ly lz l0 l1 l2 l3 l4 l5 l6 l7 l8 l9 ma mb mc md me mf mg mh mi mj mk ml mm mn mo mp mq mr ms mt mu mv mw mx my mz m0 m1 m2 m3 m4 m5 m6 m7 m8 m9 na nb nc nd ne nf ng nh ni nj nk nl nm nn no np nq nr ns nt nu nv nw nx ny nz n0 n1 n2 n3 n4 n5 n6 n7 n8 n9 oa ob oc od oe of og oh oi oj ok ol om on oo op oq or os ot ou 

ov ow ox oy oz o0 o1 o2 o3 o4 o5 o6 o7 o8 o9 pa pb pc pd pe pf pg ph pi pj pk pl pm pn po pp pq pr ps pt pu pv pw px py pz p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 qa qb qc qd qe qf qg qh qi qj qk ql qm qn qo qp qq qr qs qt qu qv qw qx qy qz q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 ra rb rc rd re rf rg rh ri rj rk rl rm rn ro rp rq rr 

rs rt ru rv rw rx ry rz r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 sa sb sc sd se sf sg sh si sj sk sl sm sn so sp sq sr ss st su sv sw sx sy sz s0 s1 s2 s3 s4 s5 s6 s7 s8 s9 ta tb tc td te tf tg th ti tj tk tl tm tn to tp tq tr ts tt tu tv tw tx ty tz t0 t1 t2 t3 

t4 t5 t6 t7 t8 t9 ua ub uc ud ue uf ug uh ui uj uk ul um un uo up uq ur us ut uu uv uw ux uy uz u0 u1 u2 u3 u4 u5 u6 u7 u8 u9 va vb vc vd ve vf vg vh vi vj vk vl vm vn vo vp vq vr vs vt vu vv vw vx vy vz v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 wa wb wc wd we wf wg wh wi wj wk wl wm wn wo wp wq wr ws wt wu wv ww wx wy wz w0 

w1 w2 w3 w4 w5 w6 w7 w8 w9 xa xb xc xd xe xf xg xh xi xj xk xl xm xn xo xp xq xr xs xt xu xv xw xx xy xz x0 x1 x2 x3 x4 x5 x6 x7 x8 x9 ya yb yc yd ye yf yg yh yi yj yk yl ym yn yo yp yq yr ys yt yu yv yw yx yy yz y0 y1 y2 y3 y4 y5 y6 y7 y8 y9 za zb zc zd ze zf zg zh zi zj zk zl zm zn zo zp zq zr zs zt zu zv zw zx 

zy zz z0 z1 z2 z3 z4 z5 z6 z7 z8 z9 0a 0b 0c 0d 0e 0f 0g 0h 0i 0j 0k 0l 0m 0n 0o 0p 0q 0r 0s 0t 0u 0v 0w 0x 0y 0z 00 01 02 03 04 05 06 07 08 09 1a 1b 1c 1d 1e 1f 1g 1h 1i 1j 1k 1l 1m 1n 1o 1p 1q 1r 1s 1t 1u 1v 1w 1x 1y 1z 10 11 12 13 14 15 16 17 18 19 2a 2b 2c 2d 2e 2f 2g 2h 2i 2j 2k 2l 2m 2n 2o 2p 2q 2r 2s 2t 2u 

2v 2w 2x 2y 2z 20 21 22 23 24 25 26 27 28 29 3a 3b 3c 3d 3e 3f 3g 3h 3i 3j 3k 3l 3m 3n 3o 3p 3q 3r 3s 3t 3u 3v 3w 3x 3y 3z 30 31 32 33 34 35 36 37 38 39 4a 4b 4c 4d 4e 4f 4g 4h 4i 4j 4k 4l 4m 4n 4o 4p 4q 4r 4s 4t 4u 4v 4w 4x 4y 4z 40 41 42 43 44 45 46 47 48 49 5a 5b 5c 5d 5e 5f 5g 5h 5i 5j 5k 5l 5m 5n 5o 5p 5q 5r 

5s 5t 5u 5v 5w 5x 5y 5z 50 51 52 53 54 55 56 57 58 59 6a 6b 6c 6d 6e 6f 6g 6h 6i 6j 6k 6l 6m 6n 6o 6p 6q 6r 6s 6t 6u 6v 6w 6x 6y 6z 60 61 62 63 64 65 66 67 68 69 7a 7b 7c 7d 7e 7f 7g 7h 7i 7j 7k 7l 7m 7n 7o 7p 7q 7r 7s 7t 7u 7v 7w 7x 7y 7z 70 71 72 73 74 75 76 77 78 79 8a 8b 8c 8d 8e 8f 8g 8h 8i 8j 8k 8l 8m 8n 8o 

8p 8q 8r 8s 8t 8u 8v 8w 8x 8y 8z 80 81 82 83 84 85 86 87 88 89 9a 9b 9c 9d 9e 9f 9g 9h 9i 9j 9k 9l 9m 9n 9o 9p 9q 9r 9s 9t 9u 9v 9w 9x 9y 9z 90 91 92 93 94 95 96 97 98 99
*/

/*
可用名 [ 'a6' ]
可用名 [ 'k3', 'j7', 'j9', 'k5', 'k0', 'k1', 'j4', 'k4' ]
可用名 [ 'l7', 'l9', 'l0', 'n5', 'm9', 'n9', 'n7', 'm0', 'n6', 'l6', 'l5' ]
可用名 [ 'p9', 'p7', 'o0', 'o6', 'q4', 'p6', 'q0', 'o7', 'q5', 'o5', 'o9' ]
可用名 [ 's0', 's9', 't0' ]
可用名 [ 't8', 'u5', 't6', 'w0', 'u4', 't4', 'u6', 'v0', 'u0', 'u9', 'u7' ]
可用名 [ 'w9','w7','y7','y8','y1','w5','y9','w1','y0','y4','y2','w6','yz','y3','y6' ]

可用名
["1b", "z6", "z4", "0p", "1f", "1i", "0v", "1w", "1l", "1d", "z5", "z7", "05", "z9", "0e", "z2", "z8", "07", "0d", "2k", "2a", "2p", "1z", "2r", "0r", "2n", "1j", "1x", "0h", "1q", "19", "1r", "2h", "0y", "1a", "0m", "1k", "0w", "06", "0f", "1e", "0u", "0z", "1m", "0q", "2o", "0k", "0l", "2t", "0a", "2f", "1o", "0t", "1n", "1g", "2i", "1v", "17", "2q", "1u", "1h", "2u", "1p", "2c", "1y", "2l", "2j", "09", "0c", "0j", "0i"]

可用名
["2v", "3i", "4r", "5b", "4j", "3t", "5f", "4a", "4w", "30", "2z", "3r", "3a", "5l", "31", "3n", "4u", "4v", "4b", "3l", "3b", "2x", "3v", "5r", "32", "5j", "3y", "4s", "3h", "2y", "3j", "3q", "3u", "49", "3m", "38", "4n", "3o", "4c", "4h", "2w", "3x", "4o", "3e", "5p", "5n", "3z", "5i", "4x", "4p", "35", "27", "5d", "5q", "47", "5e", "5h", "4z", "5k", "5c", "4i", "4y", "4l", "41", "46", "4e", "4k", "4t", "5o"]

可用名
["6e", "6b", "5w", "6x", "6q", "6f", "67", "6r", "5y", "5s", "5v", "51", "5u", "6d", "50", "56", "52", "8f", "79", "71", "8g", "7c", "7s", "70", "8a", "6j", "60", "78", "7r", "6v", "6h", "7i", "6p", "8n", "6i", "6n", "75", "7p", "8l", "6o", "7x", "6z", "72", "54", "59", "74", "7n", "7m", "6k", "7v", "6l", "7e", "57", "53", "7a", "61", "7t", "8d", "7d", "8c", "6w", "6s", "8j", "8k", "5z", "7j", "6u", "62", "5x", "68", "63", "8b", "6y", "6m", "7o", "7h", "7g", "65", "6a", "7u", "8e", "5t", "8i", "8m", "6t", "7w", "7l", "7q", "7y", "7b", "7k", "8h"]

可用名
["9n", "8u", "8v", "8q", "8w", "9c", "8z", "8y", "82", "9a", "9z", "86", "89", "83", "9e", "9t", "9j", "90", "9s", "9m", "9u", "9g", "9o", "9x", "85", "9y", "9w", "9v", "8r", "8x", "9r", "9l", "94", "9h", "91", "84", "80", "8s", "9d", "9i", "97", "9p", "9q", "9b", "8p", "92", "9k", "95", "93"]
*/

// 一共 1296
// 可用 330左右