#import <Foundation/Foundation.h>
#import "AppDelegate.h"


typedef NS_ENUM(NSInteger, DeviceIdiomCode)
{
    DeviceIdiomIphone4 = 0,
    DeviceIdiomIphone5,
    DeviceIdiomIphone6,
    DeviceIdiomIphone6p,
};



@interface GWCommonTool : NSObject

+ (NSString *)getSubStringFromDoubleString:(NSString *)number;

+ (void)setDiddFontForView:(UILabel *)vw size4:(CGFloat)size4 size6:(CGFloat)size6 size6p:(CGFloat)size6p;

/**
 *
 *
 *  @return current device idiom  (4,5,5s:width=640pix),6,6p
 */
+(DeviceIdiomCode)getCurrentDeviceModelIdiom;

+ (dispatch_queue_t)getDelegateWorkQueueForconsumptionOperation;

@end
