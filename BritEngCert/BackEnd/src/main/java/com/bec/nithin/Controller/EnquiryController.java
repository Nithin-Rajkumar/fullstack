package com.bec.nithin.Controller;

import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bec.nithin.Util.MyConstant; 
import com.bec.nithin.dto.request.EnquiryRequest;
import com.bec.nithin.dto.response.BasicResponse; 
import com.bec.nithin.dto.response.EnquiryResponse; 
import com.bec.nithin.service.EnquiryService;

import lombok.RequiredArgsConstructor;

import static com.bec.nithin.Util.MyConstant.ENQUIRY;
import static com.bec.nithin.Util.MyConstant.USER;

@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
public class EnquiryController {

    private final EnquiryService enquiryService;

    @GetMapping(MyConstant.ENQUIRYLIST)



    
    public ResponseEntity<BasicResponse<EnquiryResponse>> getEnquiryList(){
        BasicResponse<EnquiryResponse> response=new BasicResponse<>();
        try{
            response=enquiryService.getAllenquiry();
            return new ResponseEntity<>(response, OK);
        }
        catch(Exception exception){
            response.setMessage("Something Went Wrong");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }

    @PostMapping(ENQUIRY)
    public ResponseEntity<EnquiryResponse> register(@RequestBody EnquiryRequest request) {
        EnquiryResponse response=new EnquiryResponse();

        try{
            response=enquiryService.register(request);
            return new ResponseEntity<>(response, ACCEPTED);
        }
        catch(Exception e){
            response.setMessage("Something Went Wrong!!!!");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
        
    }
    @DeleteMapping(ENQUIRY + "/{enquiryId}")
    public ResponseEntity<BasicResponse<EnquiryResponse>> deleteEnquiry(@PathVariable String enquiryId) {
        BasicResponse<EnquiryResponse> response = new BasicResponse<>();
        try {
            BasicResponse<EnquiryResponse> deletedenquiryResponse = enquiryService.deleteEnquiry(enquiryId);
            response.setMessage(deletedenquiryResponse.getMessage());
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete enquiry: " + e.getMessage());
            return new ResponseEntity<>(response, INTERNAL_SERVER_ERROR);
  }

}
}