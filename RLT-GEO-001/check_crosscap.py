import sympy as s
t,u=s.symbols('t u', real=True); c=s.cos(t); q=s.sqrt(c*(2-c)); S=s.Matrix([c+2*u*(1-c),(1-u)*s.sin(t),u*q]); c0=(3-s.sqrt(5))/2; u0=(s.sqrt(5)-1)/4; t0=s.acos(c0); lam=5**s.Rational(1,4)*(3-s.sqrt(5))/4
at=lambda x:x.subs({t:t0,u:u0}).applyfunc(s.simplify)
a,b,d,e=map(at,[S.diff(u),S.diff(t),S.diff(t,u),S.diff(t,2)])
assert all(s.simplify(x)==0 for x in b+lam*a)
w=s.simplify(s.det(s.Matrix.hstack(a,d,e))); print(w.evalf(18)); assert s.simplify(w*w-25*(s.sqrt(5)-2))==0; assert w.evalf()<0
print('polar',s.det(s.Matrix.hstack(S.diff(u),S.diff(t,u),S.diff(t,2))).subs({t:0,u:1}))
