//
//  GWXiutuViewController.m
//  gewanglaile
//
//  Created by zhouhai on 16/5/30.
//  Copyright © 2016年 taoxiaojin. All rights reserved.
//

#import "GWXiutuViewController.h"
#import "RCTRootView.h"

@interface GWXiutuViewController ()

@end

@implementation GWXiutuViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.navigationBar.title = @"秀图";
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];
    // For production use, this `NSURL` could instead point to a pre-bundled file on disk:
    //
    //   NSURL *jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
    //
    // generated by "Bundle React Native code and images" build step.
    //
    //   curl http://localhost:8081/index.ios.bundle -o main.jsbundle
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName: @"gewanglaile"
                                                 initialProperties:@{}
                                                     launchOptions:nil];
    [self.view addSubview:rootView];
    rootView.frame = self.view.bounds;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end