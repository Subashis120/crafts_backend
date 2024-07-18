package com.crafts.order.rest;

import com.crafts.order.model.Order;
import com.crafts.order.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order")
public class OrderRest {

    @Autowired
    private OrderService orderService;


    @GetMapping()
    public ResponseEntity<?> getOrder() {
        List<Order> orderList = orderService.getOrder();
        return new ResponseEntity<Object>(orderList,HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> saveOrder(@RequestBody Order order) {
        order = orderService.saveOrder(order);
        return new ResponseEntity<Object>(order,HttpStatus.CREATED);
    }

}
