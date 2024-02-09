package com.bec.nithin.service;

import com.bec.nithin.dto.request.CourseRequest;
import com.bec.nithin.dto.response.BasicResponse;
import com.bec.nithin.dto.response.CourseResponse;

public interface CourseService {

    BasicResponse<CourseResponse> getAllCourse();

    CourseResponse register(CourseRequest request);

    BasicResponse<CourseResponse> deletecourse(String courseId);

    BasicResponse<CourseResponse> updateCourse(String courseId, CourseRequest courseRequest);

}
