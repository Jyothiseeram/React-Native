#include<iostream>
#include<bits/stdc++.h>
using namespace std;
int main()
{
    int n;
    cin>>n;
    bool isprime=true;
    if(n<2)
    {
     isprime=false;
    }
    for(int i=2;i<=sqrt(n);i++)
    {
        if(n%i==0)
        {
            isprime=false;
            break;
        }
    }
    if(isprime)
    {
        cout<<"Prime"<<endl;
    }
    else{
        cout<<"Not a Prime"<<endl;
    }
}