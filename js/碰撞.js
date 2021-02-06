function pz(){
			    a = {
					this.x;
					this.y;
					this.w;
					this.h;
				}
			    b = {
					this.x;
					this.y;
					this.w;
					this.h;
				}
			    if(a.x-a.w*0.5<b.x+b.w*0.5||a.x+a.w>b.x-b.w*0.5){
				    if(a.y-a.h*0.5<b.y+b.h*0.5||a.y+a.h*0.5>b.y-b.h*0.5){
					    if(a.x-a.w*0.5>=b.x+b.w*0.5){
						    a.x-a.w*0.5=b.x+b.w*0.5
						}
						else(a.x+a.w*0.5>=b.x-b.w*0.5){
						    a.x+a.w*0.5=b.x-b.w*0.5
						}
					}
				}
				if(a.y-a.h*0.5<b.y+b.h*0.5||a.y+a.h>b.y-b.h*0.5){
				    if(a.x-a.w*0.5<b.x+b.w*0.5||a.x+a.w*0.5>b.x-b.w*0.5){
					    if(a.y-a.h*0.5>=b.y+b.h*0.5){
						    a.y-a.h*0.5=b.y+b.h*0.5;
						}
						else(a.y+a.h*0.5>=b.y-b.h*0.5){
						    a.y+a.h*0.5=b.y-b.h*0.5;
						}
					}
				}
			}
