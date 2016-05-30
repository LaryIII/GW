//
//  GVUserDefaults+GWProperties.m
//  gewanglaile
//
//  Created by zhouhai on 15/1/26.
//  Copyright (c) 2015年 gewanglaile. All rights reserved.
//

#import "GVUserDefaults+GWProperties.h"

@implementation GVUserDefaults (GWProperties)

@dynamic token;
@dynamic refreshToken;
@dynamic expire;
@dynamic sid;
@dynamic name;
@dynamic nick;
@dynamic summary;
@dynamic gender;
@dynamic region;
@dynamic wechat;
@dynamic avatar;
@dynamic type;

@dynamic plan;
@dynamic sailors;
@dynamic armada;
@dynamic field;

@dynamic startups;
@dynamic education;
@dynamic work;

@dynamic epicsid;
@dynamic epicsummary;
@dynamic epicjointime;
@dynamic epicworktime;
@dynamic plansid;

@dynamic isFirst;

- (NSDictionary *)setupDefaults {
    return @{
             @"sid":@"",
             @"name":@"",
             @"nick":@"",
             @"summary":@"",
             @"gender":@"",
             @"region":@"",
             @"wechat":@"",
             @"avatar":@"",
             @"type":@"",
             @"epicsid":@"",
             @"epicsummary":@"",
             @"epicjointime":@"",
             @"epicworktime":@"",
             @"plansid":@"",
             @"isFirst":@"YES"
             };
}

#pragma mark - convert key
- (NSString *)transformKey:(NSString *)key {
    key = [key stringByReplacingCharactersInRange:NSMakeRange(0,1) withString:[[key substringToIndex:1] uppercaseString]];
    return [NSString stringWithFormat:@"HDWUserDefault%@", key];
}

@end
