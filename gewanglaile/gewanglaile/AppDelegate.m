//
//  AppDelegate.m
//  haidaowan
//
//  Created by zhouhai on 15/9/6.
//  Copyright (c) 2015年 haidaowan. All rights reserved.
//

#import "AppDelegate.h"
#import "CXLog.h"
#import "AFNetworkActivityIndicatorManager.h"
#import "GWSplashViewController.h"
#import "RDVTabBarController.h"
//#import "APService.h"
#import "GWLaunchViewController.h"
#import "GVUserDefaults+GWProperties.h"

#define NotifyActionKey "NotifyAction"
NSString* const NotificationCategoryIdent  = @"ACTIONABLE";
NSString* const NotificationActionOneIdent = @"ACTION_ONE";
NSString* const NotificationActionTwoIdent = @"ACTION_TWO";

@interface AppDelegate ()<UIScrollViewDelegate>
@property (nonatomic, strong) NSString *deviceToken;
@property (nonatomic, strong) NSString *payloadId;
@property (nonatomic, assign) int lastPaylodIndex;
@property (nonatomic) BOOL isLaunchedByNotification;
@property (nonatomic, strong) NSDictionary *userinfo;

@property (nonatomic) BOOL isBackground;

//@property (nonatomic, strong) HDWRecruitDetail *recruitDetail;
@end

@implementation AppDelegate
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    _isBackground = NO;
    // Override point for customization after application launch.
    NSURLCache *sharedCache = [[NSURLCache alloc] initWithMemoryCapacity:0 diskCapacity:0 diskPath:nil];
    [NSURLCache setSharedURLCache:sharedCache];
    
    [[AFNetworkActivityIndicatorManager sharedManager] setEnabled:YES];
    
    CXLogFormatter *formatter = [[CXLogFormatter alloc] init];
    [[DDASLLogger sharedInstance] setLogFormatter:formatter];
    [[DDTTYLogger sharedInstance] setLogFormatter:formatter];
    
    [DDLog addLogger:[DDASLLogger sharedInstance]];
    [DDLog addLogger:[DDTTYLogger sharedInstance]];
    
    [[UIApplication sharedApplication] setStatusBarStyle:UIStatusBarStyleLightContent];
    if ([[UIDevice currentDevice].systemVersion floatValue] >= 7.0) { // 判断是否是IOS7
        [[UIApplication sharedApplication] setStatusBarStyle:UIStatusBarStyleLightContent animated:NO];
        [application setStatusBarStyle:UIStatusBarStyleLightContent];//黑体白字
        [application setStatusBarStyle:UIStatusBarStyleDefault];//黑体黑字
    }
    
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    self.window.backgroundColor = [UIColor clearColor];
    
//    [GVUserDefaults standardUserDefaults].isFirst = @"YES";
    BOOL isFirst = [[GVUserDefaults standardUserDefaults].isFirst isEqualToString:@"YES"];
    
    if (!isFirst) {
        [self gotoMain]; //为真表示已有文件 曾经进入过主页
    }else{
        [self gotoLaunch];//为假表示没有文件，没有进入过主页
    }
    [self.window makeKeyAndVisible];
    
    
    // jpush start
//    if ([[UIDevice currentDevice].systemVersion floatValue] >= 8.0) {
//        //可以添加自定义categories
//        [APService registerForRemoteNotificationTypes:(UIUserNotificationTypeBadge |
//                                                       UIUserNotificationTypeSound |
//                                                       UIUserNotificationTypeAlert)
//                                           categories:nil];
//    } else {
//        //categories 必须为nil
//        [APService registerForRemoteNotificationTypes:(UIRemoteNotificationTypeBadge | UIRemoteNotificationTypeSound | UIRemoteNotificationTypeAlert) categories:nil];
//    }
//    
//    // Required
//    [APService setupWithOption:launchOptions];
//    
//    NSNotificationCenter *defaultCenter = [NSNotificationCenter defaultCenter];
//    [defaultCenter addObserver:self selector:@selector(networkDidReceiveMessage:) name:kJPFNetworkDidReceiveMessageNotification object:nil];
//    
//    // jpush end
//    
//    NSDictionary *message=[launchOptions objectForKey:UIApplicationLaunchOptionsRemoteNotificationKey];
//    if (message) {
//        NSString *sid = [message valueForKey:@"id"];
//        NSString *type = [message valueForKey:@"type"];
//        //        NSString *sid = [extras valueForKey:@"id"]; //自定义参数，key是自己定义的
//        //    NSLog(@"content =%@, extras=%@",content,extras);
//        if(sid && [type isEqualToString:@"recruit"]){
//            double delayInSeconds = 2.0;
//            dispatch_time_t popTime = dispatch_time(DISPATCH_TIME_NOW, (int64_t)(delayInSeconds * NSEC_PER_SEC));
//            dispatch_after(popTime, dispatch_get_main_queue(), ^(void){
//                [[NSNotificationCenter defaultCenter] postNotificationName:@"PresentView" object:[NSString stringWithFormat:@"%@", sid]];
//            });
//        }
//    }else{
//        
//    }

    return YES;
    
}

- (void) gotoLaunch{
    GWLaunchViewController *splashViewController = [[GWLaunchViewController alloc] init];
    [self.window setRootViewController:splashViewController];
}

- (void) gotoMain{
    [GVUserDefaults standardUserDefaults].isFirst = @"NO";
    GWSplashViewController *splashViewController = [[GWSplashViewController alloc] init];
    [self.window setRootViewController:splashViewController];
}


- (void)applicationWillResignActive:(UIApplication *)application {
    
}

- (void)applicationDidEnterBackground:(UIApplication *)application {
}

- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}

- (void)applicationWillTerminate:(UIApplication *)application {
}


- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
    
    // Required
//    [APService registerDeviceToken:deviceToken];
}


- (void)application:(UIApplication*)application didReceiveRemoteNotification:(NSDictionary*)userInfo{
//    // 取得 APNs 标准信息内容
//    NSDictionary *aps = [userInfo valueForKey:@"aps"];
//    NSString *content = [aps valueForKey:@"alert"]; //推送显示的内容
//    NSInteger badge = [[aps valueForKey:@"badge"] integerValue]; //badge数量
//    NSString *sound = [aps valueForKey:@"sound"]; //播放的声音
    
    // 取得Extras字段内容
//    NSDictionary *extras = [userInfo valueForKey:@"extras"]; //服务端中Extras字段，key是自己定义的
//    NSString *sid = [extras valueForKey:@"sid"];
    
//    NSLog(@"content =[%@], badge=[%d], sound=[%@], customize field  =[%@]",content,badge,sound,customizeField1);
    
//    [APService handleRemoteNotification:userInfo];
}

- (void)application:(UIApplication*)application didReceiveRemoteNotification:(NSDictionary*)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler{
    _isBackground = YES;
    // Required
    if(_isBackground){
//        NSDictionary *userInfo = [notification userInfo];
        //        NSString *content = [userInfo valueForKey:@"content"];
        NSString *sid = [userInfo valueForKey:@"id"];
        NSString *type = [userInfo valueForKey:@"type"];
//        NSString *sid = [extras valueForKey:@"id"]; //自定义参数，key是自己定义的
        //    NSLog(@"content =%@, extras=%@",content,extras);
        if(sid && [type isEqualToString:@"recruit"]){
            double delayInSeconds = 0.1;
            dispatch_time_t popTime = dispatch_time(DISPATCH_TIME_NOW, (int64_t)(delayInSeconds * NSEC_PER_SEC));
            dispatch_after(popTime, dispatch_get_main_queue(), ^(void){
                [[NSNotificationCenter defaultCenter] postNotificationName:@"PresentView" object:[NSString stringWithFormat:@"%@", sid]];
            });
        }
        _isBackground = NO;
    }
//    [APService handleRemoteNotification:userInfo];
    completionHandler(UIBackgroundFetchResultNewData);
}

- (void)networkDidReceiveMessage:(NSNotification *)notification {
//    NSLog(@"%@", @"123");
}


- (void)dealloc {
    NSNotificationCenter *defaultCenter = [NSNotificationCenter defaultCenter];
//    [defaultCenter removeObserver:self
//                             name:kJPFNetworkDidReceiveMessageNotification
//                           object:nil];
}


@end
