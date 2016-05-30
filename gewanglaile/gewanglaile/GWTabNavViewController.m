#import "GWTabNavViewController.h"
#import "RDVTabBarController.h"
#import "GVUserDefaults+GWProperties.h"
#import "RDVTabBarController.h"
#import "RDVTabBarItem.h"
#import "GWCommonTool.h"
#import "GWXiutuViewController.h"
#import "GWHuodongViewController.h"
#import "GWTinggeViewController.h"
#import "GWFaxianViewController.h"
#import "GWWodeViewController.h"

@interface GWTabNavViewController ()
@property (nonatomic, strong) UINavigationController *navigationController;
@end

@implementation GWTabNavViewController

- (void)viewDidLoad {
    [super viewDidLoad];
        GWXiutuViewController *findHeroController = [[GWXiutuViewController alloc] init];
        findHeroController.title = @"秀图";
        RDVTabBarItem *heroItem = [[RDVTabBarItem alloc] init];
        heroItem.title = @"秀图";
        heroItem.titlePositionAdjustment = UIOffsetMake(0.0f, 2.0f);
        [heroItem setFinishedSelectedImage:[UIImage imageNamed:@"findhero-h"] withFinishedUnselectedImage:[UIImage imageNamed:@"findhero"]];
        UIViewController *hreoNavigationController = [[UINavigationController alloc]
                                                      initWithRootViewController:findHeroController];
        
        GWHuodongViewController *recruitController = [[GWHuodongViewController alloc] init];
        recruitController.title = @"活动";
        RDVTabBarItem *recruitItem = [[RDVTabBarItem alloc] init];
        recruitItem.title = @"活动";
        recruitItem.titlePositionAdjustment = UIOffsetMake(0.0f, 2.0f);
        [recruitItem setFinishedSelectedImage:[UIImage imageNamed:@"mao-h"] withFinishedUnselectedImage:[UIImage imageNamed:@"mao"]];
        UIViewController *recruitNavigationController = [[UINavigationController alloc]
                                                         initWithRootViewController:recruitController];
        
        GWTinggeViewController *meController = [[GWTinggeViewController alloc] init];
        meController.title = @"听歌";
        RDVTabBarItem *meItem = [[RDVTabBarItem alloc] init];
        meItem.title = @"听歌";
        meItem.titlePositionAdjustment = UIOffsetMake(0.0f, 2.0f);
        [meItem setFinishedSelectedImage:[UIImage imageNamed:@"me-h"] withFinishedUnselectedImage:[UIImage imageNamed:@"me"]];
        UIViewController *meNavigationController = [[UINavigationController alloc]
                                                    initWithRootViewController:meController];
        
        RDVTabBarController *tabBarController = [[RDVTabBarController alloc] init];
        
        [tabBarController setViewControllers:@[hreoNavigationController,recruitNavigationController,meNavigationController]];
        
        tabBarController.tabBar.items = @[heroItem,recruitItem, meItem];
        for (RDVTabBarItem *item in [[tabBarController tabBar] items]) {
            item.selectedTitleAttributes = @{
                                             NSFontAttributeName: [UIFont systemFontOfSize:15],
                                             NSForegroundColorAttributeName: RGB(125, 0, 0),
                                             };
            item.unselectedTitleAttributes = @{
                                               NSFontAttributeName: [UIFont systemFontOfSize:15],NSForegroundColorAttributeName: RGB(0, 0, 0),
                                               };
        }
        self.navigationController = [[UINavigationController alloc] initWithRootViewController:tabBarController];
        self.navigationController.navigationBarHidden = YES;
    
    
    
    NSArray *arr = [[UIApplication sharedApplication] windows];
    UIWindow *mainWindow = [arr objectAtIndex:0];
    [mainWindow setRootViewController: self.navigationController];

}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
